import React from 'react';

export const Tile = (props) => {
	const obj = props.obj;
	let firstProp = true;

	const objArr = Object.values(obj);

	return (
		<div className="tile-container">
			{objArr.map((value, index) => {
				if (firstProp) {
					firstProp = false;
					return (
						<p className="tile-title" key={index}>
							{value}
						</p>
					);
				} else {
					return (
						<p className="tile" key={index}>
							{value}
						</p>
					);
				}
			})}
		</div>
	);
};
