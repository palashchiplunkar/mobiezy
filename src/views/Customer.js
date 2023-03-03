import React from "react";
import { RiSortDesc } from "react-icons/ri";
import customerDrawer from "../components/customerDrawer";
import "../css/Customer.css";

const actions = [
  { label: "Bangalore", value: "bangalore" },
  { label: "Mangalore", value: "mangalore" },
  { label: "Udupi", value: "udupi" },
];

export default function Customer() {
  return (
    <div className="container">
      <img className="home-bg-img" src={require("../assets/BG.JPG")} />
      <div>
        <div className="header-blue">
          <div className="area-div">
            <p className="area-p">Area</p>
            <select
              name="test"
              id="test"
              className="area-dropdown"
              placeholder="All Areas"
            >    
              <option>All Areas</option>
              <option value="bangalore">Bangalore</option>
              <option value="mangalore">Mangalore</option>
            </select>
          </div>
          <div className="filter-div">
            <p className="filter-p">Filter</p>
            <div className="filter-button" onClick={()=><customerDrawer/>}>
              <RiSortDesc className="filter-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
