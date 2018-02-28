// First Component Eva
// in its simplest a component is just a function that returns some JSX/html

import React from 'react';


// this is a function component 
// props - will you to pass dynamic data from another component to this one
const person = (props) => {
	
	// props.children = will access the children elements of dynamic 
	return (
		<div>
			<p>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>
		</div>
	)

	// return <p>I'm {props.name} and I am {props.age} yrs old! </p>
	// return <p>I'm {props.name} and I am { Math.floor(Math.random() *30) } yrs old! </p>
}

// the defort export feature will always import the specified class, in this case 'person'
export default person