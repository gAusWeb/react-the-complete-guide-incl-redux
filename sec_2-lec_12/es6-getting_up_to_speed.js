// --------------------------------------------------
// Javascript Ecma6 (ES6) - Getting Up To Speed
// --------------------------------------------------


// 'let' & 'const' - These are different ways of creating variables

// let = is the new 'var'
	// use let if you want to create a variable that will change

// const = use this if the car is unchanging 
	// so somthing you assign once and never change
	
// --------------------------------------------------
// let example
let myName = "Max";
console.log(myName);

myName = "Gav";
console.log(myName);

// Console logs this:
"Max"
"Gav"


// const example
const myName2 = "Max2";
console.log(myName2);

myName2 = "Gav2";
console.log(myName2);

// Console logs this:
"Max2"
"error"



// --------------------------------------------------
// ARROW FUNCTIONS ---


// older function example:
function printMyName(name) {
  console.log(name);
}

printMyName('Gav');



// NEW arrow function equivilent: 

// not passing arguments
const printMyName2 = () => {
  console.log('Max');
}

printMyName2();


// Passing arguments
const printMyName3 = name => {
  console.log(name);
}

printMyName3('Max');


// Passing > 1 argument
const printMyName3 = (name, age) => {
  console.log(name, 28);
}

printMyName3('Max', 28);



// A function that only returns a value

// new normal example
const multiply = (number) => {
	return number * 2;
}

console.log( multiply(2) );


// new shorthand method, which is the same as the above example
// this will still work with > 1 argumentS
const multiply2 = (number) => number * 2;

console.log( multiply2(2) );



// --------------------------------------------------
// IMPORT & EXPORTS (MODULES) ---

// This is basically the ability to import files / data from other Javascript files


// Importing /  Exporting: Method 1

	// At the bottom of the file you wish to import you export your data / class by using the 'default' key word, see below:

	// Export - File name: 'person.js'
	const person {
		name: 'Gav'
	}
	export default person;

	// Import - File name: 'app.js'
	// - Now matter what you call this here, what is exported will always be dictated by the export above, below eachieve the same result
	import person from './person.js';
	import prs from './prs.js';




// Importing /  Exporting: Method 2

	// Importing specific items within an external file. Here we must explicitly use the same name in our import, as we specified in our export.

	// Export: - File name: 'utility.js'
	export const clean = ( /*...*/ ) => {}
	export const baseData = ( /*...*/ ) => {}


	// Import - File name: 'app.js'
	import { baseData } from './utility.js';
	import { clean } from './utility.js';



// Other import abilities
	
	//import single reference to data / logic
	import smth from './utility.js';

	// import single reference to data as alias
	import { smth as custName } from './utility.js';

	// import all - exposes all constants and whatever you export within the specified file into a Javascript object, which is accessed under any custom alias, in this case it is called 'bundled'
	import * as bundled from './utility.js';



// --------------------------------------------------
// Classes ---

// classes are essentially blue prints for objects
// can contain properties & methods
// supports inheritance from other classes

// logical layout
	// class Person {
	// 	name: = 'Max' // property
	// 	call = () => { /*..*/} // method
	// }



//example of inheriting class properties methods


// actual example
class Person {
	constructor() {
		this.name = 'Maxxx';
	}

	printMyName123() {
		console.log(this.name);
	}
}

// use this class to store an instance, using a const
const person = new Person();

// then execute 
person.printMyName123();


