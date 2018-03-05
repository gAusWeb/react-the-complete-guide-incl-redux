// hoc (hire order component) component - this basically wraps another component by outputting props.children 

// basically wraps the all children listed within it, but does not produce a real html element

const auxx = (props) => props.children;

export default auxx;