import React from "react";

type squareProps = {
	xIndex: number;
	yIndex: number;
	hero: number[];
};

const Square = (props: squareProps) => {
	let classList = "square";
	if (props.hero[0] === props.xIndex && props.hero[1] === props.yIndex) {
		classList = "square hero";
	}
	return <div className={classList}></div>;
};

type rowProps = {
	rowIndex: number;
	width: number;
	hero: number[];
};

const Row = (props: rowProps) => {
	const row = [...Array(props.width)].map((value, index) => {
		return (
			<Square
				key={index}
				hero={props.hero}
				xIndex={props.rowIndex}
				yIndex={index}
			/>
		);
	});
	return <div className="row">{row}</div>;
};

export default Row;
