import React from "react";

export default class TableRow extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.deleteTableRow) {
			this.deleteRow = this.props.deleteTableRow.bind(this);
		} else {
			this.deleteRow = ((_) => {return null;});
		}
	}

	roundN(num,n){
  		return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
	}

	render () {
		var row = [];
		for (let i = 0; i < this.props.data.length; i++) {
			// if (i == 0) {
			// 	// Hide ID Column
			// 	continue;
			// }
			if (typeof this.props.data[i] === "string" || this.props.data[i] instanceof String) {
				row.push(<td key={i}> {this.props.data[i]}</td>);
			} else {
				row.push(<td key={i}> {this.props.data[i].toFixed(1)}</td>);
			}
		}
		return (<tr onClick={() => this.deleteRow(this.props.rowIndex)}>
				{ row }
			    </tr>);
	}
}