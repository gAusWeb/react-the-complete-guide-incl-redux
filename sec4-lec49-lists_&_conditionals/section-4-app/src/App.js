import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

	// YOU SHOULD ALWAYS UPDATE IN AN IMMUTABLE FASION - copy the values, do not reference them

	// we have added an 'id' attr to the data so React can track individual elements, this will save a lot of memory, as any list tied with this data, once updated, instead of re-rendereing the whole list when stateChanges are detected, it may just adjust the unique selected change - THis needs to be done becauase React uses a comparing system to detect change. It has a virtual DOM that it compares to the real DOM, if it notices a difference between the two it re-renders the real DOM. By adding a unique 'id' to our data sets, React may detect the change with a lot less memory, as it can just alter that one unique item, not the whole assicated data-set.
	state = {
		persons: [
			{ id: 'qw1', name: 'Max', age: 28 },
			{ id: 'qw2', name: 'Gav', age: 34 },
			{ id: 'qw3', name: 'Mat', age: 37 }
		],
		otherState: 'some other value',

		// create a flag to hide / show content
		showPersons: false
	}

	// we need get the event, and/or, the id, or the index in the array
	nameChangeHandler = ( event, id ) => {

		// we want to update the state, but only for the person of which input field we type
		// need to find that single person, so we call findIndex() on the state.person object
		// 'findIndex()' takes a function as an input (just as 'map()' did), it will execute this function on every elem in the array - So we execute a function where we get the person 'p' as input, then we need to 'return' true or false, depending on whether this is the person / element we were looking for.
		// The correct elem/person will be true if, person id of the element is equal to that of the id received through this function (from the clicked element)
		const personIndex = this.state.persons.findIndex(p => { 
			return p.id === id;
		});

		// we then get the person itself by reaching out to this.state.persons[personIndex];
		// not mutate the original persons object, we first create a new javacscript object, then we  use the 'spread' operator '...' to copy the persons object's properties and methods to our newly made object
		const person = {
			...this.state.persons[personIndex]
		};

		// alernative approach to the above -- old way of doing it below
		// const person = Object.assign({}, this.state.persons[personIndex]);

		// we want to update the person.name attr
		person.name = event.target.value;
		
		// get the persons aray using 'spread'
		// then update , using the spread operator - update the array at the position that we fetched above using the 'findIndex()'
		const persons = [...this.state.persons];

		// update that 1 position in the array
		persons[personIndex] = person;

		// we have update persons array, so we can reset the state and set it to this updated persons array (this is a copy of the orig array), where we updated the the once changed element with the updated person, where we adjusted the name (here: 'person.name = event.target.value;')
		this.setState({ persons: persons })
	}

	// delete element handler 
	deletePersonHandler = (personIndex) => {

		// first we fetch all the persons
		// at the end we attach 'slice()', slice will copy the array it is placed on. This is best practive, as now we copy the array, not 'reference' it, this avoids us from mutulating the original data/array 
		// const persons = this.state.persons.slice();

		// an alternative to the line above, is to use ES6 here
		// here we use the new spread '...' operator to copy all elements from the given array/object to the new const we are assigning it to

		// YOU SHOULD ALWAYS UPDATE DATE WITH IN AN IMMUTABLE FASION
		const persons = [...this.state.persons];


		// then we create a new version of that persons array
		// we want to remove (splice) an item from the array, at the 'index', and we wish to remove only '1' item
		persons.splice(personIndex, 1);

		// then we use setState to update the DOM and assign 'persons' to the updated 'persons', which was updated by the splice 
		this.setState({ persons: persons });

		// this works because the const persons references the array that it was assigned to, so if that array is updated anywhere it will update all const's that reference it also
	}

	togglePersonsHandler = () => {
		// set the current state to the new const doesShow
		// then we set showPersons to whatever doesShow is not.
		const doesShow = this.state.showPersons;

		// call 'setState' to adjust the state
		this.setState({showPersons: !doesShow});


	}

	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		// the render method gets executed everytime React re-renders this component
		// we can take advantage of this to setup dynamic content
		// below, will reset the 'persons' const to null, if the condition is not met. This will empty the 'persons' content.
		let persons = null;

		// showPersons is a boolean, so it will return either true or false
		if (this.state.showPersons) {
			persons = (
				<div>

					{ /* 
						map - maps every element in a given array, (such as our persons array here), into something else. It does this by executing a method on every element in the array.

						It takes an element of the array single input as an argument, so a single 'person' (you can name this whatever you like) - This is placed in anonymous function, using an arrow function, which we pass to the 'map()' method 

						click - here we attach an attribute that will handle click events ('click', this can be any name). This event will delete what ever element is clicked. To do this we need to figure out which item was clicked, so we take advantage of the 'map((someArrayElem, index))' by specifiying a second argument that we must wrap in parentheses - This 'index' allows to keep track of which item is clicked. 

						Now we place an anonymous arrow function on the click attr and pass in it the clicked items 'index'

						--- the alternative to this would be ---
						click={ this.deletePersonHandler.bind(this, index) }
						changed - now that our content is dynamic, we wish to update connected elems with the updated data a user types. As we are already using props.changed (in Persons.js)./ changed, and its anonymouse function will be exectuted on the every onChange event, here is where we get the event object. We then pass the event object to the nameChangeHandler, and also pass the peroson.id, which we can access because we are still within the 'map()' method

					*/ }
					{ this.state.persons.map((person, index) => {
						return <Person 
							click 	=	{ () => this.deletePersonHandler(index) } 
							name 		=	{ person.name } 
							age 		=	{ person.age } 
							key 		=	{ person.id }
							changed 	=	{ (event) => this.nameChangeHandler(event, person.id) }
						/>
					})}

					{/*
						--- ^^ --- The above is the same as below --- vv ---

						<Person name="Gav" age="23">My Hobbies Inc: Racing </Person>
						<Person name="Mat" age="34"></Person>

						<Person 
						name={ this.state.persons[0].name } 
						age={ this.state.persons[0].age } />

						<Person 
						name={ this.state.persons[1].name } 
						age={ this.state.persons[1].age } 
						click={ this.switchNameHandler.bind(this, 'Max!') } 
						changed={ this.nameChangeHandler } />

						<Person 
						name={ this.state.persons[2].name } 
						age={ this.state.persons[2].age } />

						<Person>{ this.state.otherState }</Person>
					*/}
				</div> 
			);
		}

		return (
			<div className="App">

				<h1>Hi, I am a fresh change</h1>
				<p>This is really Working!!</p>

				<button
					style={ style } 
					onClick={ this.togglePersonsHandler }>Toggle Persons
				</button>

				{ /* the if statement will fill or empty 'persons' depending on the click event */ }
				{persons}
					
			</div>
			);
		}
	}


export default App;
