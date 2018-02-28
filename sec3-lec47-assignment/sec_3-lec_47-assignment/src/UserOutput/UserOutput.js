import React from 'react';

import './UserNameStyling.css';

const userOuput = (props) => {
	return (
		<div className="UserOutput">
			<p>Username: {props.userName}</p>
			<p>One day I will be overwritten!</p>
		</div>
	);
}

export default userOuput;