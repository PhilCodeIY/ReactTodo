import React, { Component } from 'react'
import { removeTodo, completeTodo} from '../actions/todos'

class TodoItem extends Component {
  complete = (e) => {
    completeTodo(this.props.id)
  }

  remove = (e) => {
    removeTodo(this.props.id)
  }
  render(){
    return (
      <li className={this.props.status}>
        {this.props.text}
        <button onClick={this.remove}>Remove</button>
        <button onClick= {this.complete}>Mark as Completed</button>
      </li>
    )
  }
}

export default TodoItem
