import React from "react";
import { useSelector } from "react-redux";

import FavoritesCard from "../components/FavoritesCard";

const SavedConversions = () => {
	const favoritesSelector = useSelector((state) => state.favorites);
	const { items } = favoritesSelector;

	return (
		<>
			{items.map((conversion, i) => (
				<FavoritesCard key={i} conversion={conversion} />
			))}
		</>
	);
};

export default SavedConversions;
