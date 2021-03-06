import axios from "axios";

import {
	CURRENCY_DETAILS_REQUEST,
	CURRENCY_DETAILS_SUCCESS,
	CURRENCY_DETAILS_FAIL,
} from "../constants/currencyConstants";

const API_STATUS = process.env.REACT_APP_USE_LIVE_API === "true" ? true : false;

export const getRates = (currency) => async (dispatch, getState) => {
	let REQ_URL;
	if (API_STATUS) {
		REQ_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/${currency}`;
	} else {
		REQ_URL = "https://open.exchangerate-api.com/v6/latest";
	}

	try {
		dispatch({ type: CURRENCY_DETAILS_REQUEST });

		const { data } = await axios.get(REQ_URL);
		console.log(`${currency} : ${REQ_URL}`);
		const currencies = API_STATUS ? data.conversion_rates : data.rates;

		dispatch({ type: CURRENCY_DETAILS_SUCCESS, payload: currencies });
	} catch (error) {
		console.log(error);
		dispatch({ type: CURRENCY_DETAILS_FAIL, payload: error });
	}
};
