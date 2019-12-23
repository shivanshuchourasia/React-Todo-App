import React from 'react';

import todosData from '../data/todosData';
import TodoItems from '../components/TodoItems';

const App = () => {
	const todoItems = todosData.map((item) => <TodoItems key={item.id} item={item} />);

	return (
		<div style={{ width: 700 }} className="container mt-4 shadow-lg p-3 mb-5 bg-white rounded">
			{todoItems}
		</div>
	);
};

export default App;
