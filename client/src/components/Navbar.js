import React, { useState } from "react";
import { useSelector, useEffect, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addToCartReducer.cartItems);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const toggleOpen = () => {
    setIsOpen((pre) => {
      return !pre;
    });
  };

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          MOB CART
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              // <li className="nav-item nav-link">
              //   {currentUser.name}
              // </li>
              <div className="dropdown" onClick={toggleOpen}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>{currentUser.name} </span>
                  <i className="fa-solid fa-user"></i>
                </button>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <li
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </li>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span>{cartItems.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
