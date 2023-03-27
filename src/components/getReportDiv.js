import React from "react";
import { useState, useEffect } from "react";
import "../css/getReportDiv.css";
import API from "../services/API";

const GetReportDiv = (props) => {
    const {
        agentData,
        setAgentData,
        ownerDataforDropdown,
        setOwnerDataforDropdown,
        isLoading,
        setIsLoading,
        setCollectedAmount,
        setLength,
        operatorId,
    } = props;

    const agentId = JSON.parse(localStorage.getItem("user")).agentId;

    const [selected, setSelected] = useState(null);
    console.log(operatorId);
    const OwnerSelection = () => {
        const OwnerSelectionData = agentData.map((data) => {
            return <option value={data.Agent_Id}>{data.Name}</option>;
        });
        return OwnerSelectionData;
    };

    const handleDropChange = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    };

    const handleSelection = (e) => {
        e.preventDefault();
        let ownerDataRequest = {
            agentId: agentId,
            operatorId: operatorId,
            dailyReport: "Y",
        };
        setOwnerDataforDropdown([]);
        setIsLoading(true);
        const selectedOwner = document.getElementById("ownerselect").value;
        // console.log(selectedOwner, agentId)
        if (selected == agentId) {
            try {
                API.dailyReportAPI(ownerDataRequest).then((response) => {
                    // Set owner data state to the API response
                    setIsLoading(false);
                    console.log(response.data.report);
                    setOwnerDataforDropdown(response.data.report);
                    if (response.data.report.length > 0) {
                        setLength(response.data.report.length);
                        setCollectedAmount(
                            response.data.report[0].totalCollectedAmount
                        );
                    } else {
                        console.log("No data found");
                        setLength(0);
                        setCollectedAmount(0);
                    }
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            API.dailyReportAPI({
                agentId: selected,
                operatorId: operatorId,
                dailyReport: "Y",
                considerAgentType: "N",
            })
                .then((response) => {
                    setIsLoading(false);
                    console.log(response.data.report);
                    setOwnerDataforDropdown(response.data.report);
                    if (response.data.report.length > 0) {
                        setLength(response.data.report.length);
                        setCollectedAmount(
                            response.data.report[0].totalCollectedAmount
                        );
                    } else {
                        console.log("No data found");
                        setLength(0);
                        setCollectedAmount(0);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

<<<<<<< HEAD
  return (
    <div className="get-report-div">
      <select
        className="get-report-dropdown"
        id="ownerselect"
        value={selected}
        onChange={handleDropChange}
      >
        <option value={agentId}>Owner Summary</option>
        <option value="0">Office</option>
        <option value="1">Online</option>
        <OwnerSelection />
        {/* <option value={data.customerName}>{data.customerName}</option> */}
      </select>
      <button className="get-report-btn" onClick={handleSelection}>
        Get Report
      </button>
    </div>
  );
=======
    return (
        <div className="get-report-div">
            <select
                className="get-report-dropdown"
                id="ownerselect"
                onChange={() => setSelected(selected)}
            >
                <option value={agentData.agentId}>Owner Surname</option>
                <option value="0">Office</option>
                <option value="1">Online</option>
                <OwnerSelection />
            </select>
            <button className="get-report-btn" onClick={handleSelection}>
                Get Report
            </button>
        </div>
    );
>>>>>>> f5a204bf13b5c480d14f5a0368fa28aacf084501
};

export default GetReportDiv;
