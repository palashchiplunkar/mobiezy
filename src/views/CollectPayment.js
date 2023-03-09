import React from "react";

import "../css/CollectPayment.css";

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
                <table className="customer-table">
                    <tr>
                        <th className="table-column-1">Name</th>
                        <th className="table-column-2">:</th>
                        <div>
                        <th className="table-column-3">Raghavendra Ganiga</th>
                        </div>   
                    </tr>
                    
                    <tr>
                        <td className="table-column-1">Customer Id</td>
                        <td className="table-column-2">:</td>
                        <div className="column-3-div">
                        <td className="table-column-3">KS00567</td>
                        </div>
                    </tr>

                    <tr>
                        <td className="table-column-1">VC No</td>
                        <td className="table-column-2">:</td>
                        <div className="column-3-div">
                        <td className="table-column-3">0000000000123456</td>
                        </div>
                    </tr>

                    <tr>
                        <td className="table-column-1">STB No</td>
                        <td className="table-column-2">:</td>
                        <div className="column-3-div">
                        <td className="table-column-3">ST00100000123456765432</td>
                        </div>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
}
