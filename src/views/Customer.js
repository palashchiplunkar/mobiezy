import { Dropdown } from "bootstrap";
import React from "react";
import Select from "react-select";

import "../css/Customer.css";

const actions = [
    { label: "Add", value: 1 },
    { label: "Edit", value: 2 },
    { label: "Delete", value: 3 },
];

export default function Customer() {
    return (
        <div className="container">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />

            <div>
                <div className="header-blue">
                    <div className="area-div">
                        <p className="area-p">Area</p>
                        <Select options={actions} />
                    </div>
                </div>
            </div>
        </div>
    );
}
