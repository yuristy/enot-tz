const TodoLine = ({ color }) => {
  return (
    <svg width="5" height="40" viewBox="0 0 5 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="5" height="40" rx="2.5" fill={color} />
    </svg>
  )
}

export default TodoLine;


