import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const leadApi = {
  getLeads: (params) => api.get('/leads', { params }),

  createLead: (leadData) => api.post('/leads', leadData)
}

export default api