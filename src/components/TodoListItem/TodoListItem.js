import React, { Component } from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }

  onToggleImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props
    const { done, important } = this.state

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    const spanStyles = {
      color: important ? 'tomato' : 'black'
    }

    return (
      <span className={classNames}>
        <span
          className='todo-list-item-label'
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onToggleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    )
  }
}
