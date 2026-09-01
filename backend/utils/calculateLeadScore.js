const calculateLeadScore = (leadData) => {
  const { industry, companySize, website, location } = leadData

  let score = 0
  const scoreReasons = []

  const targetIndustries = ['SaaS', 'Technology', 'Software']

  if (targetIndustries.some((item) => item.toLowerCase() === industry.toLowerCase())) {
    score += 30
    scoreReasons.push('Matches a target industry')
  }

  if (companySize >= 50 && companySize <= 500) {
    score += 30
    scoreReasons.push('Has a suitable company size')
  }

  if (website) {
    score += 20
    scoreReasons.push('Has a company website')
  }

  if (location) {
    score += 20
    scoreReasons.push('Has location information')
  }

  let priority = 'Low'

  if (score >= 80) {
    priority = 'High'
  } else if (score >= 50) {
    priority = 'Medium'
  }

  return {
    score,
    priority,
    scoreReasons
  }
}

export default calculateLeadScore