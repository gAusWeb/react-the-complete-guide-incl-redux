import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// name global const's in CAPS to signify that it is global
const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};


class BurgerBuilder extends Component {

	// --- older method of initiating 'state' ---
	// constructor (props) {
	// 	super(props);
	// 	this.state = {}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0, 
			cheese: 0, 
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	updatePurchaseState (ingredients) {
		
		// turn the object into an array
		const sum = Object.keys(ingredients)
		.map(igKey => {
			//return the values of the keys in the state.ingredients
			return ingredients[igKey];
		})
		// reduce the array into a single number
		.reduce((sum, el) => {
			// return 0 if no ingredients selected
			// return the total sum of all ingredients
			return sum + el;
		}, 0);

		this.setState({purchasable: sum > 0});
	}

	addIngredientHandler = (type) => {

		const oldCount = this.state.ingredients[type];

		const updatedCount = oldCount + 1;

		const updatedIngredients = {...this.state.ingredients};

		updatedIngredients[type] = updatedCount; 

		const priceAddition = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;

		const newPrice  = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients		
		});

		this.updatePurchaseState(updatedIngredients);
	}


	removeIngredientHandler = (type) => {

		const oldCount = this.state.ingredients[type];

		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;

		const updatedIngredients = {...this.state.ingredients};

		updatedIngredients[type] = updatedCount; 

		const priceAddition = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;

		const newPrice  = oldPrice - priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients		
		});

		this.updatePurchaseState(updatedIngredients);
	}

	// unlike the other methods above, we need to use an arrow function with event handling, otherwise the 'this' keyword will not reference the class it is contained in 
	purchaseHandler = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing:false})
	}


	render () {

		// disable button if all ingredients of that type are removed
		const disabledInfo = {
			// copy the state.ingredients in an imutable way using spread
			...this.state.ingredients
		}
		
		// loop through all the keys in disabledInfo (which is a copy of the original state.ingredients)
		for (let key in disabledInfo) {
			// check if the key is zero or less
			// then update the disabledInfo[key] (salad, meat, etc.)
			// disabledInfo[key] = the value of the keys -- Eg. salad: 1 (1 < being the value of the key salad, and so on..)
			// this will update our copied object 'disabledInfo' values with either true or false -- Eg. [salad: true, meat: false, etc.]
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<Aux>
				<Modal show={ this.state.purchasing } modalClosed={ this.purchaseCancelHandler }>
					<OrderSummary ingredients={ this.state.ingredients } />
				</Modal>
				<Burger ingredients= { this.state.ingredients } />
				<BuildControls
					ingredientRemoved={ this.removeIngredientHandler } 
					ingredientAdded={ this.addIngredientHandler }
					disabled={ disabledInfo }
					purchasable={ this.state.purchasable } 
					ordered={ this.purchaseHandler }
					price={ this.state.totalPrice }
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;