import React, { Component } from 'react';

// This is used to check 'prop' types, to ensure the right data types are being passed to the props object - To use this you first must run, npm install --save prop-types
import PropTypes from 'prop-types';

import classes from './PersonDemo2.css';

// withClass - Method 1 
// import WithClass from '../hoc/WithClass';

// withClass - Method 2 
import Auxx from '../../../hoc/Auxx';
import withClassMethod2 from '../../../hoc/WithClassMethod2';

class PersonDemo2 extends Component {

	constructor(props) {

		// By specifying a custom 'constructor' (not using the default, and which can only be done in a class), overwrites React's default constructor, hence
		// 'super.'props must be used within our custom constructor
		super(props);
		console.log('[PersonDemo2.js Inside Constructor]', props);
	}
	

	componentWillMount() {
		console.log('[PersonDemo2.js Inisde componentWillMount()');
	}

	componentDidMount() {
		console.log('[PersonDemo2.js] Inside componentDidMount');

		// this is now available due to the React 'ref' keyword placed on the input below, can only used in class based components
		// the 'input' element below: 'inp' & 'inputElement' (can be any name you wish to specify)
		// this will force the element that this is placed on to be in focus when the element is rendered
		// if more than 1 element that is created, it will place the focus on the last elemetn created
		// do not get lazy and apply styles / state changes etc. via this method
		
		// this.inputElement.focus();
		
		
		// if you wish to specify another element that should contain the focus, you can access if like an array with this 'if' statement
		if(this.props.position ===0) {
			this.inputElement.focus();
		} 

	}


	render() {

		console.log('[PersonDemo2.js] Inside render()');

		return (
			<Auxx>
				<p onClick={ this.props.click }>I'm {this.props.name} and I am {this.props.age} yrs old! </p>
				
				<p>{ this.props.children }</p>
				
				<input 
					ref={ (inp) => { this.inputElement = inp } }
					type="text" 
					onChange={ this.props.changed } 
					value={ this.props.name } />

			</Auxx>

		)
		
		/*
			// you can pass only an array of JSX objects without a containing WithClass, but you must give each element a unique key of some sort
			[
				<p key="1" onClick={ this.props.click }>I'm {this.props.name} and I am {this.props.age} yrs old! </p>
				<p key="2">{ this.props.children }</p>
				<input key="2" type="text" onChange={ this.props.changed } value={ this.props.name } />
			]
		*/
	}
}

// ensure the right data types are being passed to the props
// cannot use this in function components (components that dont specify the class function)
PersonDemo2.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClassMethod2(PersonDemo2, classes.PersonDemo2);