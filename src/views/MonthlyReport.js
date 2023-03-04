import React from "react";
import { RiSortDesc } from "react-icons/ri";
import "../css/Report.css";
// import calender icon from react-icons
import { RiCalendarEventFill } from "react-icons/ri";

export default function MonthReport() {
    return (
        <div className="container-report">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />
            <div className="headerblue-report">
            <h2 className="report-label">Monthly Report</h2>
            </div>
            <div className="date-report">
                <div className="from-date">
                    <p className="from-date-label">From Date</p>
                    <input className="from-date-input" type="date" />
                    <RiCalendarEventFill className="calender-icon" />

                </div>
                <div className="to-date">
                    <p className="to-date-label">To Date</p>
                    <input className="to-date-input" type="date" />
                    {/* add calender icon side to input */}
                    <RiCalendarEventFill className="calender-icon" />


                </div>

            </div>
            <div className="get-report-div">
                {/* Add dropdown option */}
                <select className="get-report-dropdown">
                    <option value="owner">Owner Sur ...</option>
                    <option value="owner1">Owner 1</option>
                    <option value="owner2">Owner 2</option>
                    <option value="owner3">Owner 3</option>
                </select>
                <button className="get-report-btn">Get Report</button>
            </div>

            <div className="report-data">
            <div class="report-data-div">
                <div class="report-data-owner">
                    <p class="report-data-owner-id">Owner ID</p>
                    <p class="report-data-owner-amt">Amount</p>
                </div>
                <p class="report-data-owner-name">Owner Name</p>
                </div>

            </div>

            
        </div>
    );
}       