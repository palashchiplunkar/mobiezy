import React from "react";
import { useState } from "react";
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
    } = props;

    const [selected, setSelected] = useState(null);

    const OwnerSelection = () => {
        const OwnerSelectionData = agentData.map((data) => {
            return <option value={data.Agent_Id}>{data.Name}</option>;
        });
        return OwnerSelectionData;
    };

  const handleSelection = () => {
    setOwnerDataforDropdown([]);
    setIsLoading(true);
    const selectedOwner = document.getElementById("ownerselect").value;
    API.dailyReportAPI({
      agentId: selectedOwner,
      operatorId: "1603",
      dailyReport: "Y",
      considerAgentType: "N",
    })
      .then((response) => {
        setIsLoading(false);
        console.log(response.data.report);
        setOwnerDataforDropdown(response.data.report);
        if (response.data.report.length > 0) {
          setLength(response.data.report.length);
          setCollectedAmount(response.data.report[0].totalCollectedAmount);
        } else {
          console.log("No data found");
          setLength(0);
          setCollectedAmount(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

    const AllData = () => {
        setAgentData("owner");
    };

  return (
    <div className="get-report-div">
      <select
        className="get-report-dropdown"
        id="ownerselect"
        onChange={() => setSelected(selected)}
      >
        <option value="11276" onClick={AllData}>
          Owner Sur ...
        </option>
        <option value="0">Office</option>
        <option value="1">Online</option>
        <OwnerSelection />
      </select>
      <button className="get-report-btn" onClick={handleSelection}>
        Get Report
      </button>
    </div>
  );
};

export default GetReportDiv;
