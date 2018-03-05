import React, { PureComponent } from 'react';

// this is not a functional component, this is a standard function, but this returns a functional component

/* METHOD 1
	const withClassMethod2 = (WrappedComponent, className) => {

		// this will receive the 'props', then it will render somthing..
		// returns a functional component
		// 'props' are just an object of key|value pairs
		return (props) => (
			<div className={className}>

				{/* do not change this element, or its state in here 

				{/* Using '...' (the 'spread' operator) simply tells React to simply pass on the props as you get them, do not do anything with them, just pass them on 
				
				{/* <= this brace is just used for comments

				<WrappedComponent {...props} />
			</div>
		)
	}
*/


// METHOD 2 - in case you want to reach out to the web for data
// this is a function that returns a class on demand
const withClassMethod2 = (WrappedComponent, className) => {

	// no class name specified here, this is basically anonymous class
	return class extends PureComponent {
		render() {
			return (
				<div className={className}>
					<WrappedComponent {...this.props} />
				</div>
			)
		}
	}
}

export default withClassMethod2;