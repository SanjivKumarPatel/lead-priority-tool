import { useEffect, useState } from 'react'

import LeadForm from './components/LeadForm.jsx'
import LeadStats from './components/LeadStats.jsx'
import LeadTable from './components/LeadTable.jsx'
import { leadApi } from './services/api.js'

function App() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [priority, setPriority] = useState('')

  const fetchLeads = async () => {
    try {
      setLoading(true)

      const params = {}

      if(search){
        params.search = search
      }

      if(priority){
        params.priority = priority
      }

      const response = await leadApi.getLeads(params)

      setLeads(response.data.leads)
    } catch (error) {
      console.error('Fetch leads error:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateLead = async (leadData) => {
    try {
      await leadApi.createLead(leadData)

      fetchLeads()
    } catch (error) {
      console.error('Create lead error:', error.message)

      alert(error.response?.data?.message || 'Failed to create lead')
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [search, priority])

  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600'>
            Lead Management
          </p>

          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Lead Priority Tool
          </h1>

          <p className='mt-2 max-w-2xl text-gray-600'>
            Organize your potential leads and automatically identify which opportunities deserve priority.
          </p>
        </div>

        <div className='space-y-6'>
          <LeadStats leads={leads} />

          <LeadForm onCreateLead={handleCreateLead} />

          <LeadTable
            leads={leads}
            loading={loading}
            search={search}
            setSearch={setSearch}
            priority={priority}
            setPriority={setPriority}
          />
        </div>
      </div>
    </main>
  )
}

export default App