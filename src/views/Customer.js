import React from "react";
import { RiSortDesc } from "react-icons/ri";
import customerDrawer from "../components/customerDrawer";
import Navbar from "../components/navbar";
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
            <div className="header-blue">
                <div className="area-div">
                    <p className="area-p">Area</p>
                    <select
                        name="test"
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
                    <div
                        className="filter-button"
                        onClick={() => <customerDrawer />}
                    >
                        <RiSortDesc className="filter-icon" />
                    </div>
                </div>
            </div>
            <Navbar value={1}/>

            <div className="card-div">
                <div class="container">
                    <h4>
                        <b>John Doe</b>
                    </h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    );
}
