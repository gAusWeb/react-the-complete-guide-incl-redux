import React from 'react';
import classes from './PersonDemo2.css';

const PersonDemo2 = (props) => {

	return (
		<div className={ classes.PersonDemo2 }>
			<p onClick={ props.click }>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={ props.changed } value={ props.name } />
		</div>
	)
}

export default PersonDemo2;