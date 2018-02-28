// First Component Eva
// in its simplest a component is just a function that returns some JSX/html

import React from 'react';

// import new CSS file
import './Person.css';


// this is a function component 
// props - will you to pass dynamic data from another component to this one
const person = (props) => {
	
	// props.children = will access the children elements of dynamic 
	return (
		<div className="Person">
			<p onClick={ props.click }>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>

			{	
				// using 'onChange' we bind 'props.changed' to the 'onNameChangeHandler' (found in App.js), we then use the default object 'event' (found in the nameChangeHandler) to extract the 'target' (which is the input element), then 'value' of the target, which is what we entered.

				// 'value' - Here we set the input field to display the current on init value, so essentially we are setting up two way data binding - This will throw a 'warning' in the console, but its just a warning, not an error
			}
			<input type="text" onChange={ props.changed } value={ props.name } />
		</div>
	)

	// return <p>I'm {props.name} and I am {props.age} yrs old! </p>
	// return <p>I'm {props.name} and I am { Math.floor(Math.random() *30) } yrs old! </p>
}

// the defort export feature will always import the specified class, in this case 'person'
export default person