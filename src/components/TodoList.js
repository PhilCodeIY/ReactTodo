import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		return (
			<div>
				<ul>
				{this.props.todos.map(todo => (
					<TodoItem key={todo.id} {...todo} />
					
				))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(appState) {
		return {
			todos: appState.todos
		}
}
export default connect(mapStateToProps)(TodoList)
