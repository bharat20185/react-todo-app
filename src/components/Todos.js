import React, { useState, useEffect } from 'react'
import uuidv4 from 'uuid'
import Todo from './Todo'
import AddTodo from './AddTodo'
import TodoCount from './TodoCount'

function Todos() {
  const TODO_ITEMS_KEY = 'todosContainer'
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem(TODO_ITEMS_KEY))
    if (getTodos) setTodos(getTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (text) => {
    setTodos([...todos, {
      id: uuidv4(),
      text,
      completed: false
    }])
  }

  const completeTaskHandler = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id)
    done.completed = !done.completed
    setTodos(newTodos)
  }

  const deleteTaskHandler = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <div className="card mt-5">
        <div className="card-header">
          My Todos
        </div>
        <div className="card-body">
          <AddTodo
            addTodoHandler={addTodoHandler}
          />
          <ul className="list-group mt-5">
            {
              todos.length
                ? todos.map(todo =>
                  (<Todo
                    key={todo.id}
                    {...todo}
                    completeTaskHandler={completeTaskHandler}
                    deleteTaskHandler={deleteTaskHandler}
                  />))
                : null
            }
          </ul>
        </div>
        <div className="card-footer">
          {
            todos.length
              ? <TodoCount todos={todos} />
              : 'Nothing to do, Chill & Relax'
          }
        </div>
      </div>
    </>
  );
}

export default Todos;