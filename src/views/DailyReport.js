import React, { useEffect, useState } from "react";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import API from "../services/API";

import "../css/MonthlyReport.css";
import "../css/global.css";
import { Spinner } from "react-bootstrap";

export default function DailyReport() {
    const [agentData, setAgentData] = useState([]);
    const [CollectedAmount, setCollectedAmount] = useState(0);
    const [noCollection, setNoCollection] = useState(false);
    const [length, setLength] = useState(0);
    const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState(null);

    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    const OwnerSelection = () => {
        const OwnerSelectionData = agentData.map((data) => {
            return <option value={data.Agent_Id}>{data.Name}</option>;
        });
        return OwnerSelectionData;
    };

    const handleDropChange = (e) => {
        setSelected(e.target.value);
    };

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

                setOwnerDataforDropdown(response.data.report);

                if (response.data.length > 0) {
                    setCollectedAmount(
                        response.data.report[0].totalCollectedAmount
                    );
                } else {
                    setNoCollection(true);
                }

                // get length of the response
                const length = response.data.report.length;
                setLength(length);
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    const fetchDropdownData = () => {
        try {
            API.dropdownAgentDataAPI({ operatorId: user.operatorId }).then(
                (response) => {
                    setAgentData(response.data.all_agents);
                    setIsLoading(false);
                }
            );
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const getFilterReport = () => {
        if (selected == "Owner Summary") {
            fetchOwnerData();
        } else {
            const body = {
                agentId: selected,
                operatorId: user.operatorId,
                dailyReport: "Y",
                considerAgentType: "N",
            };
            API.dailyReportAPI(body)
                .then((response) => {
                    setOwnerDataforDropdown(response.data.report);
                })
                .catch((err) => {
                    console.log(err);
                });
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

            <div className="get-report-div">
                <select
                    className="get-report-dropdown"
                    id="ownerselect"
                    value={selected}
                    onChange={handleDropChange}
                >
                    <option value={"Owner Summary"}>Owner Summary</option>
                    <option value="0">Office</option>
                    <option value="1">Online</option>
                    <OwnerSelection />
                    {/* <option value={data.customerName}>{data.customerName}</option> */}
                </select>
                <button className="get-report-btn" onClick={getFilterReport}>
                    Get Report
                </button>
            </div>

            <div
                className="no-collection-div"
                style={{
                    display: noCollection == true ? "block" : "none",
                    marginTop: "50%"
                }}
            >
                No Collection Today
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoading && (
                    <Spinner
                        animation="border"
                        variant="info"
                        style={{ marginTop: "100px" }}
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
