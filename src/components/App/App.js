import React, { Component } from 'react'

import AppHeader from '../AppHeader/AppHeader'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import ItemAddForm from '../ItemAddForm/ItemAddForm'

import './App.css'


export default class App extends Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deletItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)

      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArray = [...before, ...after]

      //AFTER REFACTORING
      //const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      console.log('Added', text)
      return {
        todoData: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render() {

    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done === true).length // OR short option (el => el.done)
    const todoCount = todoData.length - doneCount

    return (
      <div className='todo-app' >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deletItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm
          onItemAdded={this.addItem}
        />
      </div>
    )
  }
}