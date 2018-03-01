import React from 'react';

const validation = (props) => {

	let validationMsg = 'Text long enough';

	if (props.inputLength <= 5) {
		validationMsg = 'Text too short';
	}

	return (
		<div className="Validation">
			<p>{ validationMsg }</p>
		</div>
	);
};

export default validation