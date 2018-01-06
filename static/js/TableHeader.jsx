import React from "react";

export default class TableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		var header = [];
		for (let i = 0; i < this.props.header.length; i++) {
			if (i == 0) {
				// Hide ID Column
				continue;
			}
			header.push(<th key={i}> {this.props.header[i]} </th>);
		}
		return (<tr>
				{header}
			    </tr>);
	}
}