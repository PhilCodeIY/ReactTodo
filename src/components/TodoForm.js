import React, { Component } from 'react';
import {addTodo} from '../actions/todos'


class TodoForm extends Component {
	state = {
		todo: ''
	}

handleSubmit = (e) => {
	e.preventDefault()
	addTodo(this.state.todo)
	this.setState({
		todo: ''
	})

}

handleChange = (e) => {
	this.setState({
		[e.target.name]: e.target.value
	})
}

  render() {
    return (
      <div>
      	<form onSubmit = {this.handleSubmit}>
      		<input onChange={this.handleChange} type = "text" value={this.state.todo} placeholder="Enter a Todo" name="todo" />
      			<button type="Submit">Save todo</button>
      	</form>
      </div>
    );
  }
}

export default TodoForm;
