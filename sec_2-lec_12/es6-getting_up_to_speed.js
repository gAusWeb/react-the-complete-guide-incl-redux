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
// 'this' behaves like constructor functions
// inheritance behaves like 'protoypes'



// actual example
class Human {

	// constructor is default / function you can add to a class that will instantiate when the class is created
	constructor() {
		this.gender = 'male'
	}

	printGender() {
		console.log(this.gender);
	}
}


// example of inheriting class properties methods

// extends - includes another classes properties / methods
// Now the Person class has access to the Human classes properties
class Person extends Human {

	constructor() {

		// super() - will execute the external classes constructor
		super();
		this.name = 'Maxxx';

		this.gender = 'female';
	}

	printMyName123() {
		console.log(this.name);
	}
}

// use this class to store an instance, using a const
const person = new Person();

// then execute

person.printMyName123();
person.printGender();




// --------------------------------------------------
// Classes/ properties & methods - The EcmaScript 6 way - Must use babel complie
	
	// use this moving forward, & is the equivilant to the above classes


class Humans {
	genders = 'male';

	printGenders = () => {
		console.log(this.genders)
	}
}

class Persons extends Humans {
	names = 'Max';
	genders = 'female';

	printMyNames = () => {
		console.log(this.names)
	}
}

const persons = new Persons();

persons.printGenders();
persons.printMyNames();




// --------------------------------------------------

// Spread & Rest Operators '...'

	// 3 dots '...' is the syntax required to access these operators, and how they work is determined by where they are placed.



// Spread ---
	
	// Used to split up an array of elements OR object properties
	// eg. - if have an old array and we want to add all the elements from that old array to a new array, and also add new elements to the new array on the fly, we would do the below:

	/*
		-- array example --
		const newArray = [ ...oldArray, 1, 2]

		-- property example --
		const newObject = { ...o-ldObject, newObjProperty:5 }

		// if the old object had an existing property, 'newObjProperty', then it would be overwritten by the new property 'newObjProperty:5'

	*/

	// Working 'Merge' example - arrays
	const arrNums = [1,2,3];
	const newNums = [...arrNums, 4];
	console.log(newNums);

	// console spits out, [1,2,3,4]

	// if we didnt use the dots (merge operator) the console would look spit out this, [[1,2,3],4]


	// Working 'Merge' example - Objects
	const peeps = {
		name:'Max'
	};

	const newPeeps = {

		// this will copy all object peroperties found in peeps ande make them available to newPeeps
		...peeps,

		// here we add a new name:val pair that will added in addition to the properties copied from 'peeps'
		age: 28
	}


// Rest --- (used less often)
	
	// used with function arguments - this will place all function arguments into an array.
	// Just specify one alias 'args' in this case, and this will be the name of the array which will hold all arguments passed through that function.
	// this allows us to easily apoply array methods to our arguments or do whatever we want to them	

	/*
		function sortArgs ( ...args ) {
			return args.sort();
		}
	*/

	// Working example
	const filter = (...args) => {
	  return args.filter(el => el > 1);
	}

	console.log(filter(1,2,3));

	// console spits out, [2,3]




// --------------------------------------------------

// Destructuring - 
	
	// Allows you to extract array elements or object properties and store them in variables

	// this is similar to spread, where spread will gather all elements, all properties etc, Destructuring allows you to pull out single elements properties and store them in variables, for both arrays and objects

	
	// layout example - Destructuring - arrays
	/*
		[a,b] = ['Hello', 'Max'];

		console.log(a); // Hello
		console.log(b); // Max
	*/

	// Destructuring Arrays - Working Example ---

	//example 1
	const newNewNums = [1,2,3];
	[num1, num3] = numbers;

	console.log(num1, num3);

	// console spits out, 
	// 1 
	// 2

	// example 2
	const newNewNums = [1,2,3];
	[num1, , num3] = numbers;

	console.log(num1, num3);

	// console spits out, 
	// 1 
	// 3



	// layout example - Destructuring - objects
	// use the curly braces on the left and target a property with its target name

	/*
		{ peepsName } = { peepsName: 'Max', peepsAge:28 }

		// we only s
		console.log(peepsName); // Max
		console.log(peepsAge); // undefined
	*/





// --------------------------------------------------

// Reference and primitive Types Refresher ---



// primitive type

const number = 1;

// this will copy the value of number into num2
const num2 = number;
console.log(num2); // 1




// reference type

const person = {
	name:'Max'
};

const secondPerson = person;

//  this will print the same value as the 'person', but it wont have copied the value like a primitive type, instead it references the the 'person' properties / values 

// if we declare person.name with a new value, this will be updated in all instances where the person object has been referenced, so if you said,

// still prints the original value of person
console.log( secondPerson ); // Max

//then updated the person.name object property
person.name = "Gav"; 

// even though you called secondPerson, it still references person.name, hence why Gav is the value we see here
console.log( secondPerson ) // Gav





// to copy an object without reference we need to use spread '...'

const person = {
	name:'Max'
};

const secondPerson = {
	...person
};

person.name = "Gav"; 

console.log( secondPerson ); // Max - is outputed





// --------------------------------------------------

// Refreshing array functions ---


// create a basic array
const nunmbers = [1,2,3];

// Array methods, like 'map()', all work in the same way. They take a function as an input (an arrow function in this case) and execute it on each item in the array, so therefore what we get in this arrowFunction is a number in the end, 'num' (but you can call it what ever you want)
// Then it will map all the returns (results) to the new array 'doubleNumArray[]'  
const doubleNumArray = numbers.map((num) => {
	return num * 2;
});


/*
	References for array functions --- 
	
	Particularly important in this course are:

	map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

	find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

	findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

	filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

	reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

	concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
	
	slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	
	splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

*/