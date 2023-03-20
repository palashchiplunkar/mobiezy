import React from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import "../css/MonthlyReport.css";
import "../css/global.css";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";
export default function MonthReport() {
    const handletodate = () => {
        const todateInput = document.getElementById("todate");
        todateInput.focus();

        todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };
    const handlefromdate = () =>{
        const fromdateInput = document.getElementById("fromdateinp");
        fromdateInput.focus();

        fromdateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }

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

    // const Owners = () => {
    const Owners = () => {
        const OwnerDataList = ownerdata.map((data) => {
            return (
               <OwnerData ownerid={data.ownerid} owneramt={data.owneramt} ownername={data.ownername} />
            );
        });
        return OwnerDataList;
    };
    const headerprops = {
        text: "Monthly Report",
        height: "10vh",
    };
    const getReportDivData={
        ownerdata:ownerdata
    }
    return (
        <div className="container-report">
            {/* <img className="home-bg-img" src={require("../assets/BG.JPG")} /> */}

            <Header {...headerprops} />

            <div className="date-report">
                <div className="from-date">
                    <p className="from-date-label">From Date</p>
                    <input className="from-date-input" type="date" id="fromdateinp" />
                    <RiCalendarEventFill className="from-date-calender-icon" 
                        onClick={handlefromdate}
                    />
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

           <GetReportDiv {...getReportDivData} />

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