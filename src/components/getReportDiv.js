import React from 'react'
import '../css/getReportDiv.css'
const GetReportDiv = (props) => {
    const ownerdata = props.ownerdata;
    const OwnerSelection = () => {
        const OwnerSelectionData = ownerdata.map((data) => {
            return <option value={data.ownername}>{data.ownername}</option>;
        });
        return OwnerSelectionData;
    };
  return (
    <div className="get-report-div">
    {/* Add dropdown option */}
    <select className="get-report-dropdown">
        <option value="owner">Owner Sur ...</option>
        {/* <OwnerSelection /> */}
        <OwnerSelection />
    </select>
    <button className="get-report-btn">Get Report</button>
</div>
  )
}
export default GetReportDiv
