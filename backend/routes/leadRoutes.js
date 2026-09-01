import express from 'express'

import { createLead, getLeads } from '../controllers/leadController.js'

const leadRouter = express.Router()

/**
 * @desc Create a new lead
 * @route POST /api/leads
 * @access Public
 */

leadRouter.post('/', createLead)

/**
 * @desc Get all leads
 * @route GET /api/leads
 * @access Public
 */

leadRouter.get('/', getLeads)

export default leadRouter