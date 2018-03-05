import React from 'react';
 
 // this hoc - (higher order component)  basicall wraps the content in a div and assigns this CSS Class

const withClass = (props) => (
	<div className={props.classes}>
		{props.children}
	</div>
);

export default withClass;