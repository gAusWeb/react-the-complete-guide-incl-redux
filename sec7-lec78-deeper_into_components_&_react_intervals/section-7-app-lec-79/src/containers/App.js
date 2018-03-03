import React, { Component } from 'react';

// { StyleRoot } -  for transforming CSS, animations / media queries etc will need additional imports
// import Radium, { StyleRoot } from 'radium'; // adds additional javscript / CSS capabilities


// New CSS Module method 
// This is a javascripit object that give you access to a string of your CSS styles, but which have been adjusted to be unique to this App module
// Setup:  - npm run eject - see 'sec6-lec66'
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import Person from '../components/Persons/PersonDemo2/PersonDemo2';

import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

	// App.js - This just should manage 'state'. 'State' must be used in a few places as possoble, of course if you have to use it, use it. An example of when to use may be when working with new / different feature, totally unrelated to the core operations of the app.

	//Standard arrow functions should be use when ever you can for components.
	state = {
		persons: [
			{ id: 'qw1', name: 'Max', age: 28 },
			{ id: 'qw2', name: 'Gav', age: 34 },
			{ id: 'qw3', name: 'Mat', age: 37 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	nameChangeHandler = ( event, id ) => {

		const personIndex = this.state.persons.findIndex(p => { 
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons })
	}

	// delete element handler 
	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	render() {
	
		let personDemo2 = null;

		if ( this.state.showPersons ) {

			personDemo2 = <Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler} />
		} 

		return (
			<div className={classes.App}>

				<Cockpit 
					// here we use the built in 'props', like 'setState', but within a class, not via the standard arrow function
					appTitle={this.props.title} 
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>

				{ personDemo2 }

			</div>
		);
	}
}

export default App;
