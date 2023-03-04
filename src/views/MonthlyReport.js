import React from "react";
import { RiCalendarEventFill } from "react-icons/ri";

import "../css/Report.css";

export default function MonthReport() {
    const handletodate = () => {
        const todateInput = document.getElementById("todate");
        todateInput.focus();

        todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };

    const ownerdata = [
        {
            ownerid: "MR14012",
            ownername: "Deepak Kumar",
            owneramt: "778",
        },
        {
            ownerid: "JB0213",
            ownername: "Akshay Vaidya",
            owneramt: "190",
        },
        {
            ownerid: "BG70279",
            ownername: "Dinesh Kumar",
            owneramt: "578",
        },
        {
            ownerid: "KS00567",
            ownername: "Raghavendra Ganiga",
            owneramt: "55",
        },
        {
            ownerid: "PB700214",
            ownername: "Gurmeet Singh",
            owneramt: "394",
        },
    ];

    // populate the select option with ownername
    const OwnerSelection = () => {
        const OwnerSelectionData = ownerdata.map((data) => {
            return <option value={data.ownername}>{data.ownername}</option>;
        });
        return OwnerSelectionData;
    };

    // const Owners = () => {
    const Owners = () => {
        const OwnerData = ownerdata.map((data) => {
            return (
                <div className="report-data-div">
                    <div className="report-data-owner">
                        <p className="report-data-owner-id">{data.ownerid}</p>
                        <p className="report-data-owner-amt">{data.owneramt}</p>
                    </div>
                    <p className="report-data-owner-name">{data.ownername}</p>
                </div>
            );
        });
        return OwnerData;
    };

    return (
        <div className="container-report">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />

            <div className="headerblue-report">
                <h2 className="report-label">Monthly Report</h2>
            </div>

            <div className="date-report">
                <div className="from-date">
                    <p className="from-date-label">From Date</p>
                    <input className="from-date-input" type="date" id="fromdate" />
                    <RiCalendarEventFill className="from-date-calender-icon" />
                </div>

                <div className="to-date">
                    <p className="to-date-label">End Date</p>
                    <input className="to-date-input" type="date" id="todate" />
                    <RiCalendarEventFill
                        className="to-date-calender-icon"
                        onClick={handletodate}
                    />
                </div>
            </div>

            <div className="get-report-div">
                {/* Add dropdown option */}
                <select className="get-report-dropdown">
                    <option value="owner">Owner Sur ...</option>

                    <OwnerSelection />
                </select>
                <button className="get-report-btn">Get Report</button>
            </div>

            <div className="report-data">
                <Owners />
            </div>

            <div className="float-div">
                <div className="report-total">
                    <div className="total-amount-collected">
                        <p className="total-amount-collected-label">
                            Total Amount Collected :{" "}
                        </p>
                        <p className="total-amount-collected-value">
                            ₹ 21050.00
                        </p>
                    </div>

                    <div className="total-amount-collected">
                        <p className="no-of-transactions-label">
                            Number of Transactions :{" "}
                        </p>
                        <p className="no-of-transactions-value">47</p>
                    </div>
                </div>

                <button className="print-report-btn">PRINT REPORT</button>

            </div>
        </div>
    );
}