import React from "react";

export default class Roster extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		var roster = [];
		for (let i = 0; i < this.props.roster.length; i++) {
			roster.push(<li key={i}> {this.props.roster[i]} </li>);
		}
		return (<ol>
				{this.props.name}
				{roster}
			    </ol>);
	}
}