import React, { Component } from 'react';

import todosData from '../data/todosData';
import TodoItems from '../components/TodoItems';

class App extends Component {
	constructor() {
		super();

		this.state = {
			todos: todosData
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		this.setState((prevState) => {
			const todos = prevState.todos.map((item) => {
				if (item.id === id) {
					item.completed = !item.completed;
				}
				return item;
			});
			return {
				todos
			};
		});
		// console.log(this.state);
	}

	render() {
		const todoItems = this.state.todos.map((item) => (
			<TodoItems handleChange={this.handleChange} key={item.id} item={item} />
		));

		return (
			<div style={{ width: 700 }} className="container mt-4 shadow-lg p-3 mb-5 bg-white rounded">
				{todoItems}
			</div>
		);
	}
}

export default App;
