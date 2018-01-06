import React from "react";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: props.data
		}
		console.log(this.state.display);
	}

	render () {
		return <p> {this.state.display} </p>;
	}
}