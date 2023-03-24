import React from "react";
import { useState } from "react";
import "../css/getReportDiv.css";
import API from "../services/API";

const GetReportDiv = (props) => {
    // const agentData = props.agentData;
    const { agentData, setAgentData } = props;
    const [ selected, setSelected] = useState(null);

    const OwnerSelection = () => {
        const OwnerSelectionData = agentData.map((data) => {
            return <option value={data.Agent_Id}>{data.Name}</option>;
        });
        return OwnerSelectionData;
    };

    // Based on user selection change the owner data
    const handleSelection = () => {
        const selectedOwner = document.getElementById("ownerselect").value;
        console.log(selectedOwner);
        // if (selectedOwner === "owner") {
        //     console.log("owner");
        //     setAgentData("owner");
        //     setSelected("owner");
        // } 
        
        // else {
        //     setAgentData(selectedOwner);
        //     setSelected(selectedOwner);
        //     document.getElementById("ownerselect").option = selectedOwner;
        // }

        API.dailyReportAPI({agentId: selectedOwner, operatorId:"1603", dailyReport:"Y"})
            .then((response) => {
                console.log(response)
            })

    };

    const AllData = () => {
        // console.log("owner");
        setAgentData("owner");
    };

    return (
        <div className="get-report-div">
            {/* Add dropdown option */}
            <select className="get-report-dropdown" id="ownerselect" onChange={() => setSelected(selected)}>
                <option value="owner" onClick={AllData}>
                    Owner Sur ...
                </option>
                {/* <OwnerSelection /> */}
                <OwnerSelection />
            </select>
            <button className="get-report-btn" onClick={handleSelection}>
                Get Report
            </button>
        </div>
    );
};

export default GetReportDiv;
