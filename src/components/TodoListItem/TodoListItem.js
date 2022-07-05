import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ label, important = false }) => {

  const spanStyles = {
    color: important ? 'tomato' : 'black'
  }

  return (
    <span
      className='todo-list-item'
      style={spanStyles}
    >
      <span className='todo-list-item-label'>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      //onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      //onClick={onDelete}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

export default TodoListItem