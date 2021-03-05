import {
	CURRENCY_DETAILS_REQUEST,
	CURRENCY_DETAILS_SUCCESS,
	CURRENCY_DETAILS_FAIL,
} from "../constants/currencyConstants";

export const currencyDetailsReducer = (state = { rates: {} }, action) => {
	switch (action.type) {
		case CURRENCY_DETAILS_REQUEST:
			return { loading: true };
		case CURRENCY_DETAILS_SUCCESS:
			return { loading: false, rates: action.payload };
		case CURRENCY_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
