export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        // orderId: action.payload,
      };
    case "PLACE_ORDER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getOrderByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDERBYUSERID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERBYUSERID_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "GET_ORDERBYUSERID_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getOrdersReducer = (state = {orders : []}, action) => {
  switch (action.type) {
    case "GET_ORDERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case "GET_ORDERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getOrderByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDERBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERBYID_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case "GET_ORDERBYID_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
