import PriorityBadge from './PriorityBadge.jsx'

const LeadTable = ({leads, loading, search, setSearch, priority, setPriority}) => {
  return (
    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
      <div className='border-b border-gray-200 p-5 sm:p-6'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-xl font-bold text-gray-900'>Leads</h2>
            <p className='mt-1 text-sm text-gray-500'>Manage and prioritize your potential leads</p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <input
              type='text'
              placeholder='Search company...'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-56'
            />

            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              className='rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            >
              <option value=''>All Priorities</option>
              <option value='High'>High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className='p-10 text-center text-gray-500'>
          Loading leads...
        </div>
      ) : leads.length === 0 ? (
        <div className='p-10 text-center'>
          <p className='text-gray-500'>No leads found</p>
        </div>
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Company
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Industry
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Size
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Location
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Score
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Priority
                </th>

                <th className='px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500'>
                  Score Reasons
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100'>
              {leads.map((lead) => (
                <tr
                  key={lead._id}
                  className='transition duration-200 hover:bg-gray-50'
                >
                  <td className='px-6 py-4'>
                    <p className='font-medium text-gray-900'>{lead.companyName}</p>

                    {lead.website && (
                      <a
                        href={lead.website}
                        target='_blank'
                        rel='noreferrer'
                        className='mt-1 inline-block text-sm text-blue-600 transition hover:text-blue-700 hover:underline'
                      >
                        Visit website
                      </a>
                    )}
                  </td>

                  <td className='px-6 py-4 text-sm text-gray-600'>
                    {lead.industry}
                  </td>

                  <td className='px-6 py-4 text-sm text-gray-600'>
                    {lead.companySize}
                  </td>

                  <td className='px-6 py-4 text-sm text-gray-600'>
                    {lead.location || '-'}
                  </td>

                  <td className='px-6 py-4'>
                    <span className='font-semibold text-gray-900'>
                      {lead.score}
                    </span>
                  </td>

                  <td className='px-6 py-4'>
                    <PriorityBadge priority={lead.priority} />
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex max-w-xs flex-wrap gap-2'>
                      {lead.scoreReasons?.length > 0 ? (
                        lead.scoreReasons.map((reason, index) => (
                          <span
                            key={index}
                            className='rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600'
                          >
                            {reason}
                          </span>
                        ))
                      ) : (
                        <span className='text-sm text-gray-400'>No reasons</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default LeadTable