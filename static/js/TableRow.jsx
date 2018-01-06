import React from "react";

export default class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.deleteRow = this.props.deleteTableRow.bind(this);
	}

	render () {
		var row = [];
		for (let i = 0; i < this.props.data.length; i++) {
			if (i == 0) {
				// Hide ID Column
				continue;
			}
			row.push(<td key={i}> {this.props.data[i]} </td>);
		}
		return (<tr onClick={() => this.deleteRow(this.props.rowIndex)}>
				{ row }
			    </tr>);
	}
}