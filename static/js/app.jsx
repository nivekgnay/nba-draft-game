import React from "react";
import Roster from "./Roster";
import Table from "./Table";
import RunSum from "./RunSum"

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0,
			rosters: this.zero2D(2,8, ""),
			stats: this.zero2D(2,8,[]),
			runSum: this.zero2D(2, this.props.data[0].length - 2, 0),
			index: 0
		}

		this.makeMove = this.makeMove.bind(this);
		this.isGameOver = this.isGameOver.bind(this);
	}

	zero2D(rows, cols, elem) {
		// Creates 2d array of elem
		var array = [], row = [];
		while (cols--) row.push(elem);
		while (rows--) array.push(row.slice());
		return array;
	}

	copy2D(array) {
		return array.map(function(arr) {
    		return arr.slice();
		});
	}

	toggleTurn(turn) {
		return 1 - turn;
	}

	isGameOver() {
		return this.state.index >= 8;
	}

	makeMove(playerData) {
		if (this.isGameOver()) {
			return;
		}
		this.setState((prevState) =>{
			var newRosters = this.copy2D(prevState.rosters);
			var newStats = this.copy2D(prevState.stats);
			var newRunSum = this.copy2D(prevState.runSum);

			var currIndex = this.state.index;
			var currTurn = this.state.turn;

			newRosters[currTurn][currIndex] = playerData[1];
			newStats[currTurn][currIndex] = playerData;

			for (let i = 0; i < playerData.length; i++) {
				if (i < 2) {
					continue;
				}
				newRunSum[currTurn][i - 2] += playerData[i];
			}

			var newTurn = this.toggleTurn(currTurn);
			var newIndex = (newTurn < currTurn) ? (currIndex + 1) : currIndex;

			return {rosters: newRosters, stats: newStats,
					turn: newTurn, index: newIndex, runSum: newRunSum};

		});
	}

	render () {
		return (<div>
				<div>
				  <div style={{float: "left", width: "50%"}}>
				  	<Roster roster={this.state.rosters[0]} name="Team 0" />
				  	<RunSum runSum={this.state.runSum[0]} header={this.props.keys.slice(2)} />
				  </div>
				  <div style={{float: "left", width: "50%"}}>
				  	<Roster roster={this.state.rosters[1]} name="Team 1" />
				  	<RunSum runSum={this.state.runSum[1]} header={this.props.keys.slice(2)} />
				  </div>
				</div>
				<br/>

				  <div align="center">
				  <Table data={this.props.data} header={this.props.keys} 
				  		makeMove={this.makeMove} isGameOver={this.isGameOver}/>
				  </div>
				</div>);
	}
}