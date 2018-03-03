import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

	const assignedClasses = [];

	let btnClass = '';

	if (props.showPersons) {
	    btnClass = classes.Red;
	}

	if ( props.persons.length <= 2 ) {
		assignedClasses.push( classes.red ); // assignedClasses = ['red']
	} 

	if ( props.persons.length <= 1 ) {
		assignedClasses.push( classes.bold ); // assignedClasses = ['red', 'bold']
	}


	return (
		// this will scope the css to our component 
		<div className={classes.Cockpit}>
			<h1>{ props.appTitle }</h1>

			<p className={assignedClasses.join(' ')}>This is really Working!!</p>

			<button
				className={btnClass}
				onClick={ props.clicked }>Toggle Persons
			</button>
		</div>
	);
}


export default cockpit;