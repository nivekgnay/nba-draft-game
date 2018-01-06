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

	componentDidMount() {
		$('.draft-table').tablesorter();
	}

	componentDidUpdate() {
		$('.draft-table').trigger("update");
	}

	deleteTableRow(index) {
		console.log('deleting row');
		console.log(this.state.display)
		if (this.props.isGameOver()) {
			return;
		}
		this.props.makeMove(this.state.display[index]);
		this.setState((prevState) => ({
    		display: prevState.display.filter((_, i) => i !== index)
  		}));
  		console.log('success');
	}

	render () {
		// Below: slice(1) is used twice to remove ID
		var body = [];
		for (let i = 0; i < this.state.display.length; i++) {
			body.push(<TableRow data={this.state.display[i].slice(1)} key={this.state.display[i][0]} 
						deleteTableRow={this.deleteTableRow} rowIndex={i} />);
		}
		return (<table border="1" className="draft-table">
				<thead><TableHeader header={this.props.header.slice(1)} /></thead> 
				<tbody>
				{body} 
				</tbody>
				</table>);
	}
}