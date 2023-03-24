import React, { useState, useEffect } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";
import ReactLoading from "react-loading";
import API from "../services/API";

import "../css/MonthlyReport.css";
import "../css/global.css";

export default function MonthReport() {
    
    const [agentData, setAgentData] = useState([]);
    const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
    const [CollectedAmount, setCollectedAmount] = useState(0);
    const [length, setLength] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    let monthlyReportAPIParams = {
        agentId: user.agentId,
        operatorId: user.operatorId,
        Startdate: "",
        Enddate: "",
        flag: "N",
        dailyReport: "N",
    };

    const fetchOwnerData = () => {
        try {
            API.monthlyReportAPI(monthlyReportAPIParams)
            .then((response) => {
                setIsLoading(false);
                setAgentData(response.data.report);
                setOwnerDataforDropdown(response.data.report);
                setCollectedAmount(
                    response.data.report[0].totalCollectedAmount
                );

                const length = response.data.report.lenght;
                setLength(length);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDropdownData = () => {
        try {
            API.dropdownAgentDataAPI({ operatorId: user.operatorId }).then(
                (response) => {
                    // console.log(response.data);
                    setAgentData(response.data.all_agents);
                }
            );

            console.log(agentData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchOwnerData();
        fetchDropdownData();
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

            <GetReportDiv agentData={agentData} setAgentData={setAgentData} />

            <div style={{ display: "flex", justifyContent: "center" }}>
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
                        <p className="no-of-transactions-value">{length}</p>
                    </div>
                </div>

                <button className="print-report-btn">PRINT REPORT</button>
            </div>
        </div>
    );
}
