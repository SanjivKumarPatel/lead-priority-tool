import { useState } from 'react'

const LeadForm = ({onCreateLead}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    location: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await onCreateLead({
      ...formData,
      companySize: Number(formData.companySize)
    })

    setFormData({
      companyName: '',
      website: '',
      industry: '',
      companySize: '',
      location: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-lg border border-gray-400 bg-gray-100 p-6'>
      <h2 className='mb-5 text-xl font-bold'>Add New Lead</h2>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <input
          type='text'
          name='companyName'
          placeholder='Company name'
          value={formData.companyName}
          onChange={handleChange}
          className='rounded-md border border-gray-400 px-4 py-2 outline-none focus:border-blue-500'
          required
        />

        <input
          type='url'
          name='website'
          placeholder='Website (optional)'
          value={formData.website}
          onChange={handleChange}
          className='rounded-md border border-gray-400 px-4 py-2 outline-none focus:border-blue-500'
        />

        <input
          type='text'
          name='industry'
          placeholder='Industry'
          value={formData.industry}
          onChange={handleChange}
          className='rounded-md border border-gray-400 px-4 py-2 outline-none focus:border-blue-500'
          required
        />

        <input
          type='number'
          name='companySize'
          placeholder='Company size'
          value={formData.companySize}
          onChange={handleChange}
          className='rounded-md border border-gray-400 px-4 py-2 outline-none focus:border-blue-500'
          min='1'
          required
        />

        <input
          type='text'
          name='location'
          placeholder='Location (optional)'
          value={formData.location}
          onChange={handleChange}
          className='rounded-md border border-gray-400 px-4 py-2 outline-none focus:border-blue-500'
        />
      </div>

      <button
        type='submit'
        className='mt-5 rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700'
      >
        Add Lead
      </button>
    </form>
  )
}

export default LeadForm