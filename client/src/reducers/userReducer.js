export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "REGISTER_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "LOGIN_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "UPDATE_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_ALLUSERS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALLUSERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "GET_ALLUSERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };

    case "DELETE_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
