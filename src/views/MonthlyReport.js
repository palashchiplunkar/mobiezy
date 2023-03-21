import React, { useState, useEffect } from "react";
import { RiCalendarEventFill } from "react-icons/ri";

import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";

import monthlyReportAPI from "../services/monthlyReportAPI";

import "../css/MonthlyReport.css";
import "../css/global.css";

export default function MonthReport() {
    const [ownerdata, setData] = useState([]);
    const [customerName, setCustomerName] = useState("");

    useEffect(() => {
        monthlyReportAPI
            .post("mobilecollectionreport", {
                agentId: "11276",
                operatorId: "1603",
                Startdate: "",
                Enddate: "",
                flag: "N",
                dailyReport: "N",
            })

            .then((response) => {
                setData(response.data.report);
                console.log(response.data);
            });
    }, []);

    const handletodate = () => {
        const todateInput = document.getElementById("todate");
        todateInput.focus();

        todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };

    const handlefromdate = () => {
        const fromdateInput = document.getElementById("fromdateinp");
        fromdateInput.focus();

        fromdateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };

    const Owners = () => {
        const OwnerDataList = ownerdata.map((data) => {
            return (
                <OwnerData
                    ownerid={data.customerId}
                    owneramt={data.totalCollectedAmount}
                    ownername={data.customerName}
                />
            );
        });
        return OwnerDataList;
    };

    const headerprops = {
        text: "Monthly Report",
        height: "10vh",
    };

    const getReportDivData = {
        ownerdata: ownerdata,
    };

    return (
        <div className="container-report">
            <Header {...headerprops} />

            <div className="date-report">
                <div className="from-date">
                    <p className="from-date-label">From Date</p>
                    <input
                        className="from-date-input"
                        type="date"
                        id="fromdateinp"
                    />
                    <RiCalendarEventFill
                        className="from-date-calender-icon"
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
