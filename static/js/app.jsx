import React from "react";
import Table from "./Table";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	display: props.data
		// }
		// console.log(this.state.display);
	}

	render () {
		return <Table data={this.props.data} header={this.props.keys} />;
	}
}