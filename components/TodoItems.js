import React from 'react';

export default (props) => {
	return (
		<div className="form-check mb-2">
			<div className="input-group-label">
				<input type="checkbox" className="form-check-input" />
				<p className="m-2">{props.item.text}</p>
			</div>
			<hr />
		</div>
	);
};
