import React from 'react';
import './Person.css';
import Radium from 'radium'; // adds additional javscript / CSS capabilities

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={ props.click }>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={ props.changed } value={ props.name } />
		</div>
	)
}

export default Radium(person);