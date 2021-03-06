import React from 'react';
import Aux from '../../../hoc/Auxx';

const orderSummary = (props) => {
	
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
				</li>
			);
		})
	
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>Ingredients selected:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to checkout?</p>
		</Aux>
	);
};

export default orderSummary;