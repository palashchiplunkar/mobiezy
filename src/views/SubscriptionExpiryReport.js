import React from "react";
// import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import "../css/SubReport.css";
import "../css/global.css";
import Header from "../components/header";

export default function SubscriptionExpiryReport() {
    // const navigate = useNavigate();
    const SubExpiryData = [
        {
            count: "1",
            expiryDate: "2021-08-31",
            daysAway: "2",
        },
        {
            count: "1",
            expiryDate: "2021-08-31",
            daysAway: "2",
        },
        {
            count: "1",
            expiryDate: "2021-08-31",
            daysAway: "2",
        },
       
    ]

    // let count=0;

    const subExpiryList = () => {
        const SubExpiryDataList = SubExpiryData.map((data) => {
            return (
                <div className="expiry-report-data-div">
                    <div className="expiry-report-data">
                        <p className="expiry-report-data-label">{data.count}</p>
                    </div>
                    <div className="expiry-report-data">
                        <p className="expiry-report-data-label">{data.expiryDate}</p>
                    </div>
                    <div className="expiry-report-data">
                        <p className="expiry-report-data-label">{data.daysAway}</p>
                    </div>
                    <div className="expiry-report-data">
                       <img src={require("../assets/detailed_link_eye.png")} alt="img" className="expiry-report-data-label" />
                    </div>
                </div>
            );
        });
        return SubExpiryDataList;
    }

    const headerprops = {
        text: "Subscription Expiry Report",
        height: "10vh",
    };

    return (
        <div className="container-expiry-report">
            
            <Header {...headerprops} />
            <div className="expiry-data-container">
                <div className="expiry-report-head-div">
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Count</p>
                    </div>
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Expiry Date</p>
                    </div>
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Days Away</p>
                    </div>
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Details Link</p>
                    </div>
                
                </div>

            </div>
            <div className="expiry-data">
                {subExpiryList()}
            </div>
            <div className="float-div-expiry">
                <button className="float-btn" >PRINT REPORT</button>
            </div>

        </div>
    );
}

