import React from "react";
import $ from "jquery";
import tablesorter from "tablesorter";
import TableHeader from "./TableHeader"
import TableRow from "./TableRow";


export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: props.data
		};
		this.deleteTableRow = this.deleteTableRow.bind(this);
	}

	// componentDidMount() {
	// 	$('.draft-table').tablesorter();
	// }

	// componentDidUpdate() {
	// 	$('.draft-table').tablesorter();
	// }

	deleteTableRow(index) {
		console.log('deleting row');
		console.log(this.state.display)
		this.setState((prevState) => ({
    		display: prevState.display.filter((_, i) => i !== index)
  		}));
  		console.log('success');
	}

	render () {
		var body = [];
		for (let i = 0; i < this.state.display.length; i++) {
			body.push(<TableRow data={this.state.display[i]} key={this.state.display[i][0]} 
						deleteTableRow={this.deleteTableRow} rowIndex={i} />);
		}
		return (<table className="draft-table">
				<thead><TableHeader header={this.props.header} /></thead>
				<tbody>
				{body} 
				</tbody>
				</table>);
	}
}