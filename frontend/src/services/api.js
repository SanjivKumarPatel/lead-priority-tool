import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lead-priority-tool.onrender.com/api'
})

export const leadApi = {
  getLeads: (params) => api.get('/leads', { params }),

  createLead: (leadData) => api.post('/leads', leadData)
}

export default api