import React from 'react'

import AppHeader from '../AppHeader/AppHeader'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'

import './App.css'


const App = () => {

  const todoData = [
    { label: 'Drink Coffe', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]

  return (
    <div className='todo-app'>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

export default App