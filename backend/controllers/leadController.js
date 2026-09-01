import Lead from '../models/Lead.js'
import calculateLeadScore from '../utils/calculateLeadScore.js'

/**
 * @desc Creates a new lead
 * @route POST /api/leads
 * @access Public
 */

export const createLead = async (req, res) => {
  try {
    const {companyName, website, industry, companySize, location} = req.body

    if(!companyName || !industry || !companySize){
      return res.status(400).json({ success: false, message: 'Company name, industry and company size are required' })
    }

    const existingLead = await Lead.findOne({
      $or: [
        {companyName: companyName.trim()},
        ...(website ? [{website: website.trim().toLowerCase()}] : [])
      ]
    })

    if(existingLead){
      return res.status(400).json({ success: false, message: 'Lead already exists' })
    }

    const {score, priority, scoreReasons} = calculateLeadScore({
      industry,
      companySize,
      website,
      location
    })

    const lead = await Lead.create({
      companyName,
      website,
      industry,
      companySize,
      location,
      score,
      priority,
      scoreReasons
    })

    res.status(201).json({ success: true, message: 'Lead created successfully', lead })
  } catch (error) {
    console.error('Create lead error:', error.message)

    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

/**
 * @desc Gets all leads
 * @route GET /api/leads
 * @access Public
 */

export const getLeads = async (req, res) => {
  try {
    const {priority, search} = req.query

    const query = {}

    if(priority && ['High', 'Medium', 'Low'].includes(priority)){
      query.priority = priority
    }

    if(search){
      query.companyName = { $regex: search, $options: 'i' }
    }

    const leads = await Lead.find(query).sort({createdAt: -1})

    res.status(200).json({ success: true, count: leads.length, leads })
  } catch (error) {
    console.error('Get leads error:', error.message)

    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}