import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

const Registerscreen = () => {
  const dispatch = useDispatch();
  const resgisterUserReducerState = useSelector(
    (state) => state.registerUserReducer
  );
  const { success, loading, error } = resgisterUserReducerState;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    if (password === confirmPasssword) {
      dispatch(registerUser(user));
    } else {
      alert("password doesnt match");
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <form onSubmit={submitHandler} className="div ">
            <h2 className="text-center m-3">Register</h2>
            {error && <Error error="Email address already registerd"></Error>}
            {loading && <Loader />}
            {success && <Success success="registered successfully" />}
            <input
              value={name}
              placeholder="name"
              className="form-control"
              required
              onChange={nameChangeHandler}
              type="text"
            />
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
            <input
              value={confirmPasssword}
              placeholder="confirm password"
              required
              className="form-control"
              onChange={confirmPasswordChangeHandler}
              type="password"
            />
            <button className="btn mt-3 btn-dark" type="submit">
              REGISTER
            </button>
          </form>
          <a href="/login" className="m-3">
            Login instead!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
