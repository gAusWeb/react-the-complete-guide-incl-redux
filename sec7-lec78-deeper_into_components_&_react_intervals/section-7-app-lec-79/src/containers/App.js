import React, { PureComponent } from 'react';

// { StyleRoot } -  for transforming CSS, animations / media queries etc will need additional imports
// import Radium, { StyleRoot } from 'radium'; // adds additional javscript / CSS capabilities


// New CSS Module method 
// This is a javascripit object that give you access to a string of your CSS styles, but which have been adjusted to be unique to this App module
// Setup:  - npm run eject - see 'sec6-lec66'
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import Person from '../components/Persons/PersonDemo2/PersonDemo2';

import Cockpit from '../components/Cockpit/Cockpit';

// withClass - Method 1 
// import WithClass from '../hoc/WithClass';

// withClass - Method 2 
import Auxx from '../hoc/Auxx';
import withClassMethod2 from '../hoc/WithClassMethod2';




class App extends PureComponent {

	// App.js - This just should manage 'state'. 'State' must be used in a few places as possoble, of course if you have to use it, use it. An example of when to use may be when working with new / different feature, totally unrelated to the core operations of the app.

	//Standard arrow functions should be use when ever you can for components.

	// the constructor is the only place where we dont need to specify 'this.'props, we can simply use 'props'
	constructor(props) {

		// By specifying a custom 'constructor' (not using the default, and which can only be done in a class), overwrites React's default constructor, hence
		// 'super.'props must be used within our custom constructor
		super(props);
		console.log('[App.js Inside Constructor]', props);

		// you can define state in the constructor if you wish, but its most likely not necassary, as it's easier to define it with our first approach below
		// this is approach will work in most projects, the other approach is the modern method 
		this.state ={
			persons: [
				{ id: 'qw1', name: 'Max', age: 28 },
				{ id: 'qw2', name: 'Gav', age: 34 },
				{ id: 'qw3', name: 'Mat', age: 37 }
			],
			otherState: 'some other value',
			showPersons: false,
			toggleClicked: 0
		}
	}
	

	componentWillMount() {
		console.log('[App.js Inisde componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount');
	}

	/* 
		// shouldComponentUpdate() - cannot be used while 'PureComponent' is implemented because they perform the same functionality

		shouldComponentUpdate(nextProps, nextState) {
			console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
			// return true;

			// only update when change has been implemented (Eg. deleting a user, or any dom element update), if nextState is different to state, then and only then update the DOM and go through all the rendering processes
			return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
		}
	*/

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
	}

	componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate')
	}


	// --- state - modern method ---
	// state = {
	// 	persons: [
	// 		{ id: 'qw1', name: 'Max', age: 28 },
	// 		{ id: 'qw2', name: 'Gav', age: 34 },
	// 		{ id: 'qw3', name: 'Mat', age: 37 }
	// 	],
	// 	otherState: 'some other value',
	// 	showPersons: false
	// }

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

		// BEST PRACTICE - Mutating 'state' --
		// if another setState has been called and access the same property, it can sometimes not render all new state alterations
		// to get around this we pass in a function to setState so that we force the setState to run all code within it, re: of which setState was called
		this.setState( (prevState, props) => {
			return {
				showPersons: !doesShow, 
				toggleClicked: prevState.toggleClicked + 1
			}
		});
	}

	render() {

		console.log('[App.js Inside render()]');

	
		let personDemo2 = null;

		if ( this.state.showPersons ) {

			personDemo2 = <Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler} />
		} 

		return (
			/*
				// withClass - Method 1 
				<WithClass classes={classes.App}>
					
					<button
						onClick={ () => {this.setState({showPersons:true})} }>
						Show Person</button>

					<Cockpit 
						// here we use the built in 'props', like 'setState', but within a class, not via the standard arrow function
						appTitle={this.props.title} 
						showPersons={this.state.showPersons}
						persons={this.state.persons}
						clicked={this.togglePersonsHandler}
					/>

					{ personDemo2 }

				</WithClass>
			*/
				


			// withClass (WithClassMethod2) - Method 2 
			
			<Auxx>
					
				<button
					onClick={ () => {this.setState({showPersons:true})} }>
					Show Person</button>

				<Cockpit 
					// here we use the built in 'props', like 'setState', but within a class, not via the standard arrow function
					appTitle={this.props.title} 
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>

				{ personDemo2 }

			</Auxx>
		);
	}
}

export default withClassMethod2(App, classes.App);
