import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default class RunSum extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		// var roster = [];
		// for (let i = 0; i < this.props.roster.length; i++) {
		// 	roster.push(<li key={i}> {this.props.roster[i]} </li>);
		// }
		return (<table border="1" className="run-sum">
				<thead><TableHeader header={this.props.header} /></thead>
				<tbody><TableRow data={this.props.runSum} rowIndex={0} /></tbody>
			    </table>);
	}
}