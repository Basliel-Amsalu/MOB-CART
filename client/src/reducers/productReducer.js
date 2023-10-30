export const getAllProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        loading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        loading: false,
      };
    case "GET_PRODUCTS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const getProductByIdReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        loading: true,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        product: action.payload,
        loading: false,
      };
    case "GET_PRODUCT_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const addProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_REVIEW_REQUEST":
      return {
        loading: true,
      };
    case "ADD_REVIEW_SUCCESS":
      return {
        review: action.payload,
        loading: false,
        success: true,
      };
    case "ADD_REVIEW_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "DELETE_PRODUCT_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "ADD_PRODUCT_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "UPDATE_PRODUCT_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
