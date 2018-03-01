import React, { Component } from 'react';

// { StyleRoot } -  for transforming CSS, animations / media queries etc will need additional imports
// import Radium, { StyleRoot } from 'radium'; // adds additional javscript / CSS capabilities


// New CSS Module method 
// This is a javascripit object that give you access to a string of your CSS styles, but which have been adjusted to be unique to this App module
// Setup:  - npm run eject - see 'sec6-lec66'
import classes from './App.css';

import Person from './Person/Person';
import PersonDemo2 from './PersonDemo2/PersonDemo2';

class App extends Component {


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

    /*
    const style = {
      backgroundColor: '#5cb85c',
      color: 'white',
      font: 'inherit',
      border: '2px solid #3e8e3e',
      padding: '8px',
      cursor: 'pointer'
      
      // now radium is installed we can user CSS pseudo selectors
      ':hover': {
        color:'black',
        backgroundColor: 'lightgreen'
      }
      
    }
    */

    let persons = null,
        btnClass = '';

    // setting dynamic CSS
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click   = { () => this.deletePersonHandler(index) } 
              name    = { person.name } 
              age     = { person.age } 
              key     = { person.id }
              changed   = { (event) => this.nameChangeHandler(event, person.id) }
            />
          })}
        </div> 
      );

      // here we alter the 'style' object's values, because it is all just javscript at the end of the day.
      // style.backgroundColor = 'red'; style.border = '2px solid #bf0000';

      // now radium is installed we can user CSS pseudo selectors
      /*
      style[':hover'] = {
        color:'black',
        backgroundColor: 'salmon'
      }
      */
    }

    let personDemo2 = null;

    //let PersonDemo2 = null;

    if ( this.state.showPersons ) {
      personDemo2 = (
        <div>
          { this.state.persons.map((demoPerson2, index) => {
            return <PersonDemo2 
              click   = { () => this.deletePersonHandler(index) } 
              name    = { demoPerson2.name } 
              age     = { demoPerson2.age } 
              key     = { demoPerson2.id }
              changed   = { (event) => this.nameChangeHandler(event, demoPerson2.id) }
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }


    // lets set some dynamic CSS class names

    // join will 'join()' seperate data, what you define in the parenthesis is the data separator 
    // let classes = ['red', 'bold'].join(' '); // returns 'red bold'


    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // assignedClasses = ['red']
    } 
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // assignedClasses = ['red', 'bold']
    }

    return (
      // <StyleRoot> - for transforming CSS, animations / media queries etc will need additional imports
      //<StyleRoot>

          // here we take a normal class name and make it unique so we can isolate it to this one module - npm run eject - see 'sec6-lec66'
          <div className={classes.App}>

            <h1>Hi, I am a fresh change</h1>
            <p className={assignedClasses.join(' ')}>This is really Working!!</p>

            <button
            className={ btnClass } 
              onClick={ this.togglePersonsHandler }>Toggle Persons
            }
            </button>

            { persons }
            { personDemo2 }
              
          </div>
        //</StyleRoot>
        // END <StyleRoot>
      );
    }
  }


//export default Radium(App);
export default App;
