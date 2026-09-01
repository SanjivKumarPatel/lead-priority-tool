const LeadStats = ({leads}) => {
  const totalLeads = leads.length
  const highPriority = leads.filter((lead) => lead.priority === 'High').length
  const mediumPriority = leads.filter((lead) => lead.priority === 'Medium').length
  const lowPriority = leads.filter((lead) => lead.priority === 'Low').length

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <div className='rounded-lg border border-gray-200 bg-white p-5'>
        <p className='text-sm text-gray-500'>Total Leads</p>
        <h2 className='mt-2 text-2xl font-bold'>{totalLeads}</h2>
      </div>

      <div className='rounded-lg border border-gray-200 bg-white p-5'>
        <p className='text-sm text-gray-500'>High Priority</p>
        <h2 className='mt-2 text-2xl font-bold'>{highPriority}</h2>
      </div>

      <div className='rounded-lg border border-gray-200 bg-white p-5'>
        <p className='text-sm text-gray-500'>Medium Priority</p>
        <h2 className='mt-2 text-2xl font-bold'>{mediumPriority}</h2>
      </div>

      <div className='rounded-lg border border-gray-200 bg-white p-5'>
        <p className='text-sm text-gray-500'>Low Priority</p>
        <h2 className='mt-2 text-2xl font-bold'>{lowPriority}</h2>
      </div>
    </div>
  )
}

export default LeadStats