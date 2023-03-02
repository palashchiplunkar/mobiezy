import { Dropdown } from "bootstrap";
import React from "react";
import Select from "react-select";

import "../css/Customer.css";

const actions = [
    { label: "Bangalore", value: "bangalore" },
    { label: "Mangalore", value: "mangalore" },
    { label: "Udupi", value: "udupi" }
];

export default function Customer() {
    return (
        <div className="container">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />

            <div>
                <div className="header-blue">
                    <div className="area-div">
                        <p className="area-p">Area</p>
                        <Select className="area-dropdown" options={actions} placeholder="All Areas" />
                    </div>
                </div>
            </div>
        </div>
    );
}
