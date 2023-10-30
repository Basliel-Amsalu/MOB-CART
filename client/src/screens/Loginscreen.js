import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Loginscreen = () => {
  const dispatch = useDispatch();
  const loginUserReducerState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginUserReducerState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  });
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          {error && <Error error=" Invalid Credentials"></Error>}
          {loading && <Loader />}
          <form onSubmit={submitHandler} className="div ">
            <h2 className="text-center m-3">Login</h2>

            <input
              value={email}
              placeholder="email"
              required
              className="form-control"
              onChange={emailChangeHandler}
              type="text"
            />
            <input
              value={password}
              placeholder="password"
              required
              className="form-control"
              onChange={passwordChangeHandler}
              type="password"
            />

            <button className="btn mt-3 btn-dark" type="submit">
              LOGIN
            </button>
          </form>
          <a href="/register" className="m-3">
            Click here to Register!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
