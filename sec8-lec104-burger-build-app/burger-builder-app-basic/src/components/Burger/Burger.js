import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

	// --- Object - gets an object // --- Object.keys -  extracts the key values (only) from an object, ['salad', 'bacon', 'cheese', 'meat'] ----
	// const tranformedIngredients = Object.keys(props.ingredients);
	
	let tranformedIngredients = Object.keys(props.ingredients).map(igKey => {

		// here transform the string value into as many ingredients have been specified

			// use the spread '...' operator to create a new array
			// use Array to create an empty 'array(3)', this would return an array with 3 empty spaces
			// then we run the map method on this new array to get the the index of the element passed, which will store the ingredient amount
			return [...Array(props.ingredients[igKey])].map((_, i) => {

				// this will create a unique key for each element and give it the 'type' that will match up with our BurgerIngredient switch statement
				return  <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);
		
		// Testing - this console for the last return
		// console.log(igKey + ' ' + 1);

		// const testTransIngreeds = Object.keys(props.ingredients);
		// console.log(testTransIngreeds);

		// lets check out the array
		// console.log(tranformedIngredients);

	if (tranformedIngredients.length === 0) {
		tranformedIngredients = <p>Please start adding ingredients</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{tranformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div> 
	);
};

export default burger;