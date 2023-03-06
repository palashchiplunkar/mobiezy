import React from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import "../css/MonthlyReport.css";

export default function DailyReport() {
    const handletodate = () => {
        const todateInput = document.getElementById("todate");
        todateInput.focus();

        todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };

    const ownerdata = [
        {
            ownerid: "KS00567",
            ownername: "Raghavendra Ganiga",
            owneramt: "55",
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
        const OwnerDataList = ownerdata.map((data) => {
            return (
               <OwnerData ownerid={data.ownerid} owneramt={data.owneramt} ownername={data.ownername} />
            );
        });
        return OwnerDataList;
    };

    return (
        <div className="container-report">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />
            <div className="headerblue-report">
                <h2 className="report-label">Daily Report</h2>
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
                <Owners/>
            </div>

            <div className="float-div">
                <div className="report-total">
                    <div className="total-amount-collected">
                        <p className="total-amount-collected-label">
                            Total Amount Collected :{" "}
                        </p>
                        <p className="total-amount-collected-value">
                            ₹ 832.00
                        </p>
                    </div>

                    <div className="total-amount-collected">
                        <p className="no-of-transactions-label">
                            Number of Transactions :{" "}
                        </p>
                        <p className="no-of-transactions-value">3</p>
                    </div>
                </div>

                <button className="print-report-btn">PRINT REPORT</button>

            </div>
        </div>
    );
}