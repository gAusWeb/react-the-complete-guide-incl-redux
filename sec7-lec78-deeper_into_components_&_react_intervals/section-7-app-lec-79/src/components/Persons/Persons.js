import React from 'react';
// import Person from '../../Person/Person';

import Person from './PersonDemo2/PersonDemo2';

// shorthand arraow function 
// if you specify parentesis, the function will  auto 'return's whatever is nested inside it
const persons = (props) => props.persons.map((person, index) => {
	return <Person 
		click   = { () => props.clicked(index) } 
		name    = { person.name } 
		age     = { person.age } 
		key     = { person.id }
		changed = { (event) => props.changed(event, person.id) }
	/>
});

export default persons;