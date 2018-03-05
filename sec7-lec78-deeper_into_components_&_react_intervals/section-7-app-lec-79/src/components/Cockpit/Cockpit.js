import React from 'react';
import classes from './Cockpit.css';
import Auxx from '../../hoc/Auxx';

const cockpit = (props) => {

	const assignedClasses = [];

	let btnClass = classes.Button;

	if (props.showPersons) {
	    btnClass = [classes.Button, classes.Red].join(' ');
	}

	if ( props.persons.length <= 2 ) {
		assignedClasses.push( classes.red ); // assignedClasses = ['red']
	} 

	if ( props.persons.length <= 1 ) {
		assignedClasses.push( classes.bold ); // assignedClasses = ['red', 'bold']
	}


	return (
		// this will scope the css to our component 
		
		// Auxx (aka, fragment) - is returning / assigning the CSS classes via 'hox/Auxx'
		// you dont have to use 'Auxx', you could simple use '<>' & '</>'
		<Auxx>
			<h1>{ props.appTitle }</h1>

			<p className={assignedClasses.join(' ')}>This is really Working!!</p>

			<button
				className={btnClass}
				onClick={ props.clicked }>Toggle Persons
			</button>
		</Auxx>
	);
}


export default cockpit;