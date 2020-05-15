import React, { Component } from "react";
import "./Board.css";

type squareProps = {
	hero: boolean;
};

const Square = (props: squareProps) => {
	let classList = "square";
	if (props.hero) {
		classList = "square hero";
	}
	return <div className={classList}></div>;
};

type rowProps = {
	heroX: number | null;
};

const Row = (props: rowProps) => {
	let heroInRow: boolean;
	if (props.heroX) {
		heroInRow = true;
	}
	const foo = [1, 2, 3, 4, 5, 6];
	const row = foo.map((value, index) => {
		let hero = false;
		if (props.heroX === index) {
			hero = true;
		}
		return <Square hero={hero} />;
	});
	return <div className="row">{row}</div>;
};

class Board extends Component {
	render() {
		const heroLocation = [2, 4];
		const foo2 = [1, 2, 3, 4, 5, 6];
		const grid = foo2.map((row, index) => {
			let heroX = null;
			if (index === heroLocation[1]) {
				heroX = heroLocation[0];
			}
			return <Row heroX={heroX} />;
		});
		return <div className="board">{grid}</div>;
	}
}

export default Board;
