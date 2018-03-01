import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'; // adds additional javscript / CSS capabilities
import Person from './Person/Person';

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

    const style = {
      backgroundColor: '#5cb85c',
      color: 'white',
      font: 'inherit',
      border: '2px solid #3e8e3e',
      padding: '8px',
      cursor: 'pointer',

      // now radium is installed we can user CSS pseudo selectors
      ':hover': {
        color:'black',
        backgroundColor: 'lightgreen'
      }
    }

    let persons = null;

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
      style.backgroundColor = 'red'; style.border = '2px solid #bf0000';

      // now radium is installed we can user CSS pseudo selectors
      style[':hover'] = {
        color:'black',
        backgroundColor: 'salmon'
      }
    }


    // lets set some dynamic CSS class names

    // join will 'join()' seperate data, what you define in the parenthesis is the data separator 
    // let classes = ['red', 'bold'].join(' '); // returns 'red bold'


    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push('red'); // classes = ['red']
    } 
    if ( this.state.persons.length <= 1 ) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">

        <h1>Hi, I am a fresh change</h1>
        <p className={classes.join(' ')}>This is really Working!!</p>

        <button
          style={ style } 
          onClick={ this.togglePersonsHandler }>Toggle Persons
        </button>

        {persons}
          
      </div>
      );
    }
  }


export default Radium(App);
