const PriorityBadge = ({priority}) => {
  const priorityStyles = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-green-100 text-green-700'
  }

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${priorityStyles[priority]}`}>
      {priority}
    </span>
  )
}

export default PriorityBadge