import React from 'react'

const todoCount = ({ todos }) => {
  const completedTodos = todos.filter(todo => todo.completed).length
  const todosLength = todos.length
  return (
    <span>
      {completedTodos} completed out of {todosLength}
    </span>
  )
}

export default todoCount