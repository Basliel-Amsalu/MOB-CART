import {
  addProductReducer,
  addProductReviewReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  updateProductReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducer";
import {
  deleteUserReducer,
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
  updateUserReducer,
} from "./reducers/userReducer";
import {
  getOrderByIdReducer,
  getOrderByUserIdReducer,
  getOrdersReducer,
  placeOrderReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getOrderByUserIdReducer: getOrderByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateUserReducer: updateUserReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  addProductReducer: addProductReducer,
  updateProductReducer: updateProductReducer,
  getOrdersReducer: getOrdersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  addToCartReducer: { cartItems: cartItems },
  loginUserReducer: { currentUser },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
