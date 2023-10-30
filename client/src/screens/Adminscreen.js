import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Userslistscreen from "./Userslistscreen";
// import Orderslistscree from "./Orderslistscree";
// import Addproductscreen from "./Addproductscreen";
// import Productslistscreen from "./Productslistscreen";

const Adminscreen = () => {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <ul className="admin p-2">
            <li>
              <Link to="/admin/userslist" style={{ color: "black" }}>
                UsersList
              </Link>
            </li>
            <li>
              <Link to="/admin/productslist" style={{ color: "black" }}>
                ProductsList
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewproduct" style={{ color: "black" }}>
                addNewProduct
              </Link>
            </li>

            <li>
              <Link to="/admin/orderslist" style={{ color: "black" }}>
                OrdersList
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Adminscreen;
