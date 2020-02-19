import React from 'react'

const todo = (props) => {
  const completedStyle = {
    color: 'green'
  }
  const clickHandler = (id) => {
    props.completeTaskHandler(id)
  }
  const deleteHandler = (id) => {
    props.deleteTaskHandler(id)
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.text}
      <div>
        <i
          className="fa fa-check"
          style={props.completed ? completedStyle : null}
          onClick={() => clickHandler(props.id)}
        ></i>
        <i
          className="fa fa-times ml-2"
          onClick={() => deleteHandler(props.id)}
        ></i>
      </div>
    </li>
  )
}

export default todo