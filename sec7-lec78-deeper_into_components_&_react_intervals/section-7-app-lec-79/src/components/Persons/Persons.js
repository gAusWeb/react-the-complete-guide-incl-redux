// PureComponent - this is basically the implementation of 'shouldComponentUpdate()', here it will automatically cycle through the properties in props and compare them to their old versions, and only continue updating if a difference is detected
import React, { PureComponent } from 'react';

import Person from './PersonDemo2/PersonDemo2';

// shorthand arraow function 
// if you specify parentesis, the function will  auto 'return's whatever is nested inside it
class Persons extends PureComponent {

	constructor(props) {

		// By specifying a custom 'constructor' (not using the default, and which can only be done in a class), overwrites React's default constructor, hence
		// 'super.'props must be used within our custom constructor
		super(props);
		console.log('[Persons.js Inside Constructor]', props);
	}
	
	componentWillMount() {
		console.log('[Persons.js Inisde componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] Inisde componentWillReceiveProps', nextProps);
	}

	/*
		// basically use this if ur component receives a lot of props, but only 1 or a few should dictate an update - drastically increases performance when used correctly - Not always required to use though
		shouldComponentUpdate(nextProps, nextState) {
			console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
			// by specifying false, this will stop the process of updating the DOM, so although the items are removed from the array (etc), this is reflected in the DOM.

			// we check only elements that will see change, only if any of these elements change update the DOM and re-render this section of the app
			return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed  || nextProps.clicked !== this.props.clicked;
			// return true;
		}
	*/

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
	}

	componentDidUpdate() {
		console.log('[UPDATE Persons.js] Inside componentDidUpdate')
	}


	render() {
		
		console.log('[Persons.js] Inside render()');
		
		return this.props.persons.map((person, index) => {
			return <Person 
				click   = { () => this.props.clicked(index) } 
				name    = { person.name } 
				age     = { person.age } 
				key     = { person.id }
				changed = { (event) => this.props.changed(event, person.id) } />
		});
	}
}

export default Persons;