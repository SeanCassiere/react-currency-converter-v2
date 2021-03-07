import {
	FAVORITES_ADD_FAIL,
	FAVORITES_ADD_SUCCESS,
	FAVORITES_ADD_REQUEST,
	FAVORITES_REMOVE_REQUEST,
	FAVORITES_REMOVE_SUCCESS,
	FAVORITES_REMOVE_FAIL,
} from "../constants/favoriteConstants";

export const favoritesReducer = (
	state = { favorites: { items: [] } },
	action
) => {
	switch (action.type) {
		case FAVORITES_ADD_REQUEST:
			return { loading: true, error: null };
		case FAVORITES_ADD_SUCCESS:
			return { loading: false, items: action.payload };
		case FAVORITES_ADD_FAIL:
			return { loading: false, error: action.payload };
		case FAVORITES_REMOVE_REQUEST:
			return { loading: true, error: null };
		case FAVORITES_REMOVE_SUCCESS:
			return { loading: false, items: action.payload };
		case FAVORITES_REMOVE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
