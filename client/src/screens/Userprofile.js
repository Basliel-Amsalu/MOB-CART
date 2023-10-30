import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { updateUser } from "../actions/userActions";

const Userprofile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  const updateUserReducerState = useSelector(
    (state) => state.updateUserReducer
  );
  const { success, loading, error } = updateUserReducerState;
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
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

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedUser = {
      name,
      email,
      password,
    };
    if (password === confirmPasssword) {
      dispatch(updateUser(currentUser.id, updatedUser));
    } else {
      alert("password doesnt match");
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <form onSubmit={updateHandler} className="div ">
            <h2 className="text-center m-3">Update</h2>
            {error && <Error error="something went wrong"></Error>}
            {loading && <Loader />}
            {success && <Success success="updated successfully" />}
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
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
