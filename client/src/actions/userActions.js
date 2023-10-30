import axios from "axios";
export const registerUser = (user) => (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  axios
    .post("http://localhost:5000/api/users/register", { user })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "REGISTER_USER_SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "REGISTER_USER_FAILED", payload: err });
    });
};
export const loginUser = (user) => (dispatch, getState) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  axios
    .post("http://localhost:5000/api/users/login", { user })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data.user });
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "LOGIN_USER_FAILED", payload: err });
    });
};
export const updateUser = (userid, updatedUser) => (dispatch, getState) => {
  dispatch({ type: "UPDATE_USER_REQUEST" });
  axios
    .post("http://localhost:5000/api/users/update", { userid, updatedUser })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: res.data.user });
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "UPDATE_USER_FAILED", payload: err });
    });
};
export const getAllUsers = () => (dispatch, getState) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  axios
    .get("http://localhost:5000/api/users/getallusers")
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: res.data.users });
      // localStorage.setItem("users", JSON.stringify(res.data.users));
      // window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_ALLUSERS_FAILED", payload: err });
    });
};
export const deleteUser = (userid) => (dispatch, getState) => {
  console.log(userid);
  dispatch({ type: "DELETE_USER_REQUEST" });
  axios
    .delete(`http://localhost:5000/api/users/deleteuser/${userid}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: "DELETE_USER_SUCCESS" });
      alert("deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "DELETE_USER_FAILED" });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  dispatch({ type: "LOGOUT_USER" });
  window.location.href = "/login";
};
