import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [sort, setSort] = useState("");
  const [catagory, setCatagory] = useState("");
  const filterHandler = () => {
    console.log(searchKey, sort, catagory);
    dispatch(filterProducts(searchKey, sort, catagory));
  };
  return (
    <div className="card p-1 mt-3">
      <div className="row justify-content-center">
        <div className="col-md-3 m-3">
          <input
            type="text"
            value={searchKey}
            placeholder="search products"
            className="form-control"
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2 m-4">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="Popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">low to high</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <select
            className="form-control"
            value={catagory}
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <button onClick={filterHandler} className="btn btn-dark">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
