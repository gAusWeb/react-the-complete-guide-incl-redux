import React from 'react';
import './Person.css';
// import Radium from 'radium'; // adds additional javscript / CSS capabilities

const person = (props) => {

	// for transforming CSS, animations / media queries etc will need additional imports
	// see App.js
	/*
	const style = {
		'@media (min-width:500px)' : {
			width: '450px'
		}
	};
	*/

	return (
		//<div className="Person" style={style}>
		<div className="Person">
			<p onClick={ props.click }>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={ props.changed } value={ props.name } />
		</div>
	)
}

//export default Radium(person);
export default person;