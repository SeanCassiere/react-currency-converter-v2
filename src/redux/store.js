import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { currencyDetailsReducer } from "./reducers/currencyReducers";
import { favoritesReducer } from "./reducers/favoriteReducers";

const reducer = combineReducers({
	currencyDetails: currencyDetailsReducer,
	favorites: favoritesReducer,
});

const favoriteItemsFromStorage = localStorage.getItem(
	"favoritesCurrencyConversions"
)
	? JSON.parse(localStorage.getItem("favoritesCurrencyConversions"))
	: [];

const initialState = { favorites: { items: favoriteItemsFromStorage } };

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
