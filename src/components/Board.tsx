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
		gridDimensions: [64, 64]
	};

	componentDidMount() {
		document.addEventListener("keydown", this.triggerkeyDown);
	}

	movementIsValid() {}

	moveHero(direction: string) {
		let newHeroPosition = [...this.state.hero];
		switch (direction) {
			case "ArrowUp":
				if (newHeroPosition[1] > 0) {
					newHeroPosition[1]--;
				}
				break;
			case "ArrowDown":
				if (newHeroPosition[1] < this.state.gridDimensions[1] - 1) {
					newHeroPosition[1]++;
				}
				break;
			case "ArrowRight":
				if (newHeroPosition[0] < this.state.gridDimensions[0] - 1) {
					newHeroPosition[0]++;
				}
				break;
			case "ArrowLeft":
				if (newHeroPosition[0] > 0) {
					newHeroPosition[0]--;
				}
				break;
		}
		this.setState({
			hero: newHeroPosition
		});
	}

	triggerkeyDown = (event: any) => {
		const valid = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
		if (valid.includes(event.key)) {
			this.moveHero(event.key);
		}
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
