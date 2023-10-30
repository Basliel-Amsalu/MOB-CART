export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload.countInStock) {
        const existingItem = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
        if (existingItem) {
          return {
            ...state,
            cartItems: [...state.cartItems].map((item) =>
              item._id === action.payload._id ? action.payload : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      }
      return state;
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
