import React from 'react';

export default (props) => {
	return (
		<div className="form-check mb-2">
			<div className="input-group-label">
				<input
					type="checkbox"
					className="form-check-input"
					onChange={() => props.handleChange(props.item.id)}
					checked={props.item.completed}
				/>
				<p
					style={{
						textDecoration: props.item.completed ? 'line-through' : 'none',
						color: props.item.completed ? '#cdcdcd' : 'black',
						fontStyle: props.item.completed ? 'italic' : null
					}}
					className="m-2"
				>
					{props.item.text}
				</p>
			</div>
			<hr />
		</div>
	);
};
