import React from "react";
import { useDispatch } from "react-redux";

import { removeFromFavorites } from "../redux/actions/favoriteActions";

const FavoritesCard = ({ conversion }) => {
	const dispatch = useDispatch();
	return (
		<div>
			<pre>{JSON.stringify(conversion)}</pre>
			<button onClick={() => dispatch(removeFromFavorites(conversion.date))}>
				Delete ${JSON.stringify(conversion.date)}
			</button>
		</div>
	);
};

export default FavoritesCard;
