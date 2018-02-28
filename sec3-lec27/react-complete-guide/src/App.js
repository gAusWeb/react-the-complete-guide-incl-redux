import React, { Component } from 'react';
import './App.css';

// here we import a custom module
// Person can be any alias, but it's best to call it the name of your component
// Referencing Person, like this <Person />, will import/execute &/or display whatever is exported in the Person.js file
import Person from './Person/Person';


// classes have properties, a property is like a variable of a class
class App extends Component {

  // declare a var within a class
  // 'state' this only works once you 'extends' a component
  //  if 'state' values change, it will force react to update the DOM
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Gav', age: 34 },
      { name: 'Mat', age: 37 }
    ],
    otherState: 'some other value'
  }

  // pass in argument for the handler to receive data
  switchNameHandler = ( newName ) => {
    //console.log('Was clicked!');
    
    // 'this' here, will only work when es6 arrow functions, otherwise 'this' will not refer to     the App class, and therefore will not hit that state property
    // DONT DO THIS, this.state.persons[0].name = 'Maximilian';
    // 'setState' - The 'Component' object has a 'setState()' method, this will update the the special 'state' property, & it will update react with this change, will then update the DOM  
    // 'setState' takes an object as argument & it will merge it with whatever is in 'state', this in this case updating the 'state.persons' object
    // IMPORTANT - Only two thing in React update the DOM, one is 'state', the other is 'props'
    this.setState({ 
      persons: [

        // to pass that dynamic data of newName, there are two ways. The first using 'bind()' - See <button</button> element below
        { name: newName, age: 28 },
        { name: 'Gav', age: 34 },
        { name: 'Mat', age: 35 }
      ]
    })
  }

  // here we are using a built in 'event' object. 
  // This event object will automatically pass the data from the input in Person.js via props
  // Usining the 'event' object, we extract the 'target' (which is the input element), then 'value' of the target (which is what the user enteres).
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 30 },
        { name: 'Mat', age: 32 }
      ]
    })
  }

  render() {

    // inline CSS styles
    // lets you target specific elems
    // limiting when getting into advanced CSS
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
      <div className="App">

        <h1>Hi, I am a fresh change</h1>
        <p>This is really Working!!</p>


        { 
          /* 
            --- click event in react ---
            - Call the method created above when this element is clicked
            - DO NOT add parentheses, as this will enoke the function straight away, instead of waiting for the event to handle it
            - 'this' - if you dont use 'this', you will run into errors, when the class is rendered at runtime.
          */ 


          // --- TO pass DATA Mehod 2 
            // - USE MEHOD 1 INSEAD,  when you can ---
            // - This method can be inefficient re: performance
          
          // we call an arrow function within the click event - this anonymous shorthand arrow function automatically places a 'return' after the '=>', thus automatically returning the value once the click event is triggered
          // now we pass the data in the handler
        }
        <button
            style={ style } 
            onClick={ () => this.switchNameHandler('MAXXXYY-BOYYY') }>Switch Name</button>



        {
          /* 
            below, we call/ display the Person component, but we also pass values to this component, 'name', 'age'. These will now be available in the Person component & get stored as an argument object, in the exported Person const / class in Person.js.
            
            'props' also has the ability to access children elements / data - 
            A child element is defined by anything between the opening and closing tags of the Person element, EG. <Person>My Hobbies Inc: Racing</Person>
            to access the children we must specify 'props.children' in our Person.js file, only after the props argument jhas been passed to the (in this case) 'const person = (props) => {..)' arrow function

            --- Hard Coded example ---
            here we pass not only values to the Person component, but also children 
          */
        }
        <Person name="Gav" age="23">My Hobbies Inc: Racing </Person>
        <Person name="Mat" age="34" />


        {
          // --- Dynamic example using 'state' ---
        }
        <Person 
          name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age } />
        
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age } 


          // --- TO pass DATA MEHOD 1 
            // - perferred method of passing in data to a clickHandler ---

          // the first way - use 'bind()'. 'this' (within 'bind'), binds 'this' to the class scope, just like when we used switchNameHandler's 'this'  
          // here we pass the click handler (a method) through props, to the component, in this case 'Person', this is done by attaching another attribute to the <person /> compnent reference
          click={ this.switchNameHandler.bind(this, 'Max!') } 

          // here we name this next attribute 'changed' and pass it the new 'nameChangeHandler' which will enable us to pass this handler to the <Person /> component found in, Person.js. This allows us to extraxt user-data from the new input within that Person Component
          changed={ this.nameChangeHandler } />
        
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age } />

        <Person>{ this.state.otherState }</Person>


      </div>
    );

    // below, this is what the JSX (above) actually translates to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a fresh change!!!!'));
  }
}


export default App;
