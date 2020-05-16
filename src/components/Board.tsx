import React, { Component } from "react";
import Row from "./Row.tsx";
import "./Board.css";

type State = {
	hero: number[];
	gridDimensions: number[];
};

class Board extends Component {
	state: State = {
		hero: [2, 4],
		gridDimensions: [6, 6]
	};

	render() {
		const grid = [...Array(this.state.gridDimensions[1])].map((row, index) => {
			return (
				<Row
					width={this.state.gridDimensions[0]}
					key={index}
					rowIndex={index}
					hero={this.state.hero}
				/>
			);
		});
		return <div className="board">{grid}</div>;
	}
}

export default Board;
