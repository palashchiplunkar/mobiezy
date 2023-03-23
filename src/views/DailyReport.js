import React, { useEffect, useState } from "react";
import OwnerData from "../components/ownerdatadiv";

import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";

import "../css/MonthlyReport.css";
import "../css/global.css";
import loginAPI from "../services/authApi";
import ReactLoading from "react-loading";

export default function DailyReport() {

    const handletodate = () => {
        const todateInput = document.getElementById("todate");
        todateInput.focus();

        todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    };

    const [ownerdata, setOwnerData] = useState([]);
    const [CollectedAmount, setCollectedAmount] = useState(0);
    const [length, setLength] = useState(0);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let userJson;

    const user = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (user) {
        userJson = JSON.parse(user);
    }

    // Based on selectedOwner change the owner data
    useEffect(() => {
        if (selectedOwner) {
            if (selectedOwner === "owner") {
                setOwnerDataforDropdown(ownerdata);
            } else {
                const selectedOwnerData = ownerdata.filter(
                    (data) => data.customerId === selectedOwner
                );
                setOwnerDataforDropdown(selectedOwnerData);
            }
        }
    }, [selectedOwner]);

    const fetchOwnerData = async () => {
        try {
            const response = await loginAPI.post("mobilecollectionreport", {
                agentId: userJson.agentId,
                considerAgentType: "Y",
                operatorId: userJson.operatorId,
                Startdate: "/",
                dailyReport: "N",
            });

            // Set owner data state to the API response
            setIsLoading(false);
            setOwnerData(response.data.report);
            setOwnerDataforDropdown(response.data.report);
            setCollectedAmount(response.data.report[0].totalCollectedAmount);

            // get length of the response
            const length = response.data.report.length;
            setLength(length);
            // console.log(length);

            // console.log(response.data.report);
        } 
        
        catch (error) {
            console.log(error);
        }
    };

    // console.log(selectedOwner)
    useEffect(() => {
        setIsLoading(true);
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
    
    const getReportDivData = {
        ownerdata: ownerdata,
    };

    return (
        <div className="container-report">
            <Header {...headerprops} />
            <GetReportDiv
                ownerdata={ownerdata}
                setSelectedOwner={setSelectedOwner}
            />
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
