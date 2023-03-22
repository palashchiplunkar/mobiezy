import React, { useState, useEffect } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";
import monthlyReportAPI from "../services/monthlyReportAPI";
import ReactLoading from "react-loading";
import "../css/MonthlyReport.css";
import "../css/global.css";

export default function MonthReport() {

    const [ownerdata, setData] = useState([]);
    const [customerName, setCustomerName] = useState(null);
    const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
    const [CollectedAmount, setCollectedAmount] = useState(0);
    const [length, setLength] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
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
                setIsLoading(false);
                setData(response.data.report);
                setOwnerDataforDropdown(response.data.report);
                setCollectedAmount(response.data.report[0].totalCollectedAmount);
            
            // get length of the response
            const length = response.data.report.length;
            setLength(length);
                // setDefaultOwnerData(response.data.report);
                console.log(response.data);
            });
    }, []);

    useEffect(() => {

        if (customerName) {
            if (customerName === "owner") {
                setOwnerDataforDropdown(ownerdata);
            } else {
                const selectedOwnerData = ownerdata.filter(
                    (data) => data.customerId === customerName
                );

                setOwnerDataforDropdown(selectedOwnerData);
            }
        }
    }, [customerName]);

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
        const OwnerDataList = ownerDataforDropdown.map((data) => {
            return (
                <OwnerData
                    ownerid={data.customerId}
                    owneramt={data.collectedAmount}
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
        setSelectedOwner: setCustomerName
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
            <div style={{ display: "flex", justifyContent: "center"}}>
                {isLoading && (
                    <ReactLoading
                        type={"spin"}
                        color={"#0090da"}
                        height={75}
                        width={75}
                    />
                )}
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
                            ₹ {CollectedAmount}
                        </p>
                    </div>

                    <div className="total-amount-collected">
                        <p className="no-of-transactions-label">
                            Number of Transactions :{" "}
                        </p>
                        <p className="no-of-transactions-value">
                            {length}
                        </p>
                    </div>
                </div>

                <button className="print-report-btn">PRINT REPORT</button>
            </div>
        </div>
    );
}
