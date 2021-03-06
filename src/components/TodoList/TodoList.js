import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map(item => {
    const { id, ...itemProps } = item
    return (
      <li
        key={item.id}
        className="list-group-item"
      >
        <TodoListItem
          // label={item.label}
          // important={item.important}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  })

  return (
    <ul className='todo-list list-group'>
      {elements}
    </ul>
  )
}

export default TodoList