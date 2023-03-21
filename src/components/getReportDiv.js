import React from 'react'
import '../css/getReportDiv.css'
import OwnerData from '../components/ownerdatadiv'
const GetReportDiv = (props) => {
    const ownerdata = props.ownerdata;
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
    const handleOwnerSelection = (e) => {
        const selectedOwner = e.target.value;
        const selectedOwnerData = ownerdata.filter(
            (data) => data.customerId === selectedOwner
        );
        console.log(selectedOwnerData);
    };
  return (
    <div className="get-report-div">
    {/* Add dropdown option */}
    <select className="get-report-dropdown" >
        <option value="owner">Owner Sur ...</option>
        {/* <OwnerSelection /> */}
        <OwnerSelection />
    </select>
    <button className="get-report-btn">Get Report</button>
    
</div>
  )
}
export default GetReportDiv
