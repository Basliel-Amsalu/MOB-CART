import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Userslistscreen = () => {
  const getAllUserssState = useSelector((state) => state.getAllUsersReducer);

  const dispatch = useDispatch();

  const { loading, users, error } = getAllUserssState;
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h2> Users List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {users &&
            users.map((user) => (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <i
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                    className="far fa-trash-alt"
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userslistscreen;
