import React from "react";
import { useState } from "react";
import "../css/getReportDiv.css";

const GetReportDiv = (props) => {
    // const ownerdata = props.ownerdata;
    const { ownerdata, setSelectedOwner } = props;
    const [ selected, setSelected] = useState(null);

    // Add only unique customerId to the json
    const unique = ownerdata
        .map((e) => e.customerId)
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => ownerdata[e])
        .map((e) => ownerdata[e]);

    // Map the unique customerId to the dropdown

    const OwnerSelection = () => {
        const OwnerSelectionData = unique.map((data) => {
            return <option value={data.customerId}>{data.customerName}</option>;
        });
        return OwnerSelectionData;
    };

    // Based on user selection change the owner data
    const handleSelection = () => {
        const selectedOwner = document.getElementById("ownerselect").value;
        console.log(selectedOwner);
        if (selectedOwner === "owner") {
            console.log("owner");
            setSelectedOwner("owner");
            setSelected("owner");
        } else {
            setSelectedOwner(selectedOwner);
            setSelected(selectedOwner);
            document.getElementById("ownerselect").option = selectedOwner;
        }
    };

    const AllData = () => {
        // console.log("owner");
        setSelectedOwner("owner");
    };

    return (
        <div className="get-report-div">
            {/* Add dropdown option */}
            <select className="get-report-dropdown" id="ownerselect" onChange={() => setSelectedOwner(selected)}>
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
