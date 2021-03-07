import {
	FAVORITES_ADD_FAIL,
	FAVORITES_ADD_SUCCESS,
	FAVORITES_ADD_REQUEST,
	FAVORITES_REMOVE_FAIL,
	FAVORITES_REMOVE_SUCCESS,
	FAVORITES_REMOVE_REQUEST,
} from "../constants/favoriteConstants";

export const addToFavorites = (newItem) => async (dispatch, getState) => {
	dispatch({ type: FAVORITES_ADD_REQUEST });

	const items = getState().favorites.items;

	const tempItems = [...items, newItem];

	try {
		localStorage.setItem(
			"favoritesCurrencyConversions",
			JSON.stringify(tempItems)
		);

		dispatch({ type: FAVORITES_ADD_SUCCESS, payload: tempItems });
	} catch (err) {
		dispatch({ type: FAVORITES_ADD_FAIL, error: err });
	}
};

export const removeFromFavorites = (id) => async (dispatch, getState) => {
	dispatch({ type: FAVORITES_REMOVE_REQUEST });

	const items = getState().favorites.items;

	const tempItems = items.filter((conversion) => conversion.date !== id);

	try {
		localStorage.setItem(
			"favoritesCurrencyConversions",
			JSON.stringify(tempItems)
		);

		dispatch({ type: FAVORITES_REMOVE_SUCCESS, payload: tempItems });
	} catch (err) {
		dispatch({ type: FAVORITES_REMOVE_FAIL, payload: err });
	}
};
