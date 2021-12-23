import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
	const array = props.array;

	return (
		<>
			{array.map((obj, index) => {
				return <Tile key={index} obj={obj} />;
			})}
		</>
	);
};
