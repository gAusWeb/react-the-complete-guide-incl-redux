import React from 'react';
import './PersonDemo2.css';

const PersonDemo2 = (props) => {

	return (
		<div className="PersonDemo2">
			<p onClick={ props.click }>I'm {props.name} and I am {props.age} yrs old! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={ props.changed } value={ props.name } />
		</div>
	)
}

// export default Radium(PersonDemo2);
export default PersonDemo2;