import React from "react";

import "../css/CollectPayment.css";
import "../css/global.css";
export default function collectPayment() {
    return (
        <div className="container">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />

            <div className="header-blue">
                {/* <div className="customer-details-div">
                    <div className="customer-details-line1-div">
                        <p className="name-label-p">Name</p>
                        <p className="first-colon-p">:</p>
                        <p className="customer-name-p">Raghavendra Ganiga</p>
                    </div>
                    
                    <div className="customer-details-line2-div">
                        <p className="customer-id-label-p">Customer Id</p>
                        <p className="second-colon-p">:</p>
                        <p className="customer-id-p">KS00567</p>
                    </div>
                </div> */}
                <div className="table-div">
                
                </div>
            </div>
        </div>
    );
}
