import React, { useRef } from 'react'

function AddTodo(props) {
  const addTodoItem = useRef(null)

  const clickHandler = (e) => {
    e.preventDefault()
    const text = addTodoItem.current.value.trim()
    if (text !== '') props.addTodoHandler(addTodoItem.current.value)
    addTodoItem.current.value = null
  }

  return (
    <>
      <input type="text" ref={addTodoItem} className="form-control" />
      <button className="btn btn-dark mt-2" onClick={clickHandler}>Add Todo</button>
    </>
  )
}

export default AddTodo