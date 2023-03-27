import React, { useEffect, useState } from "react";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";
import API from "../services/API";

import "../css/MonthlyReport.css";
import "../css/global.css";
import { Spinner } from "react-bootstrap";

export default function DailyReport() {

    const [agentData, setAgentData] = useState([]);
    const [CollectedAmount, setCollectedAmount] = useState(0);
    const [length, setLength] = useState(0);
    const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    const operatorId = user.operatorId;
    let ownerDataRequest = {
        agentId: user.agentId,
        operatorId: user.operatorId,
        dailyReport: "Y",
    };

    const fetchOwnerData = () => {
        try {
            API.dailyReportAPI(ownerDataRequest).then((response) => {
                // Set owner data state to the API response
                setIsLoading(false);
                // console.log(response);
                // setOwnerData(response.data.report);
                setOwnerDataforDropdown(response.data.report);
                setCollectedAmount(
                    response.data.report[0].totalCollectedAmount
                );
 
                // get length of the response
                const length = response.data.report.length;
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
                    setAgentData(response.data.all_agents);
                }
            );

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchDropdownData();
        fetchOwnerData();
    }, []);

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
        text: "Daily Report",
        height: "10vh",
    };

    return (
        <div className="container-report">
            <Header {...headerprops} />
            <GetReportDiv
                agentData={agentData}
                setAgentData={setAgentData}
                ownerDataforDropdown={ownerDataforDropdown}
                setOwnerDataforDropdown={setOwnerDataforDropdown}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setCollectedAmount={setCollectedAmount}
                setLength={setLength}
                operatorId={operatorId}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoading && (
                    <Spinner animation="border" variant="info" style={{marginTop:"100px"}}/>
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
                            ₹{""}
                            {CollectedAmount}
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
