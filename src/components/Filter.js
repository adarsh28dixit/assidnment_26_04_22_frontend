import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <>
      <div className="container">
      <h6>Topic</h6>
      <input className="filter-input" type="text"/>

      <h6>Level</h6>
      <div>
        <label className="container">
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />Beginner
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />Intermediate
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />Advanced
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />All the above
        </label>
      </div>

      <h6>Price</h6>
      <div>
        <label className="container">
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />499 - 1000
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />1000 - 1500
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />1000 - 1500
        </label>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark" />1000 - 1500
        </label>
      </div>
      </div>
    </>
  );
}

export default Filter;
