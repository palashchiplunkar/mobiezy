import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../components/header";
import API from "../services/API";

import "../css/SubReport.css";
import "../css/global.css";

export default function SubscriptionExpiryReport() {
    const [showItems, setshowItems] = useState([]);
    const [dateResponse, setdateResponse] = useState(null);
    const [expiryResponse, setexpiryResponse] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [isDateLoading, setisDateLoading] = useState(false);

    const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));

    let agentData = {
        agent_id: user.agentId,
        operator_id: user.operatorId,
    };

    useEffect(() => {
        setisLoading(true);

        API.subscriptionExpiryReportAPI(agentData)

            .then((response) => {
                setexpiryResponse(response.data);
                setisLoading(false);
            })

            .catch((e) => {
                setisLoading(false);
                console.log(e);
            });
    }, []);

    const ExpiryCount = ({ date }) => {
        let expiryData = {
            agent_id: "11276",
            operator_id: "1603",
            pre_end_date: date,
        };

        API.subscriptionExpiryReportCountAPI(expiryData)

            .then((response) => {
                setdateResponse(response.data);
            })

            .catch((e) => {
                console.log(e);
                setisDateLoading(false);
            });

        return (
            <table className="expiryCountTable">
                <tr className="borderExpiryHead">
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>Phone No</th>
                </tr>
                {isDateLoading && (
                    <div>
                        <Spinner animation="border" variant="info" />
                    </div>
                )}
                {dateResponse &&
                    dateResponse.c_report.map((report) => {
                        return (
                            <tr>
                                <td>{report.CUSTOMER_ID}</td>
                                <td style={{ fontWeight: 700 }}>
                                    {report.NAME}
                                </td>
                                <td
                                    style={{
                                        color: "#0090DA",
                                        textDecorationLine: "underline",
                                        fontWeight: 700,
                                    }}
                                >
                                    {report.PHONE}
                                </td>
                            </tr>
                        );
                    })}
            </table>
        );
    };

    const subExpiryList = () => {
        const SubExpiryDataList = expiryResponse.stb_report.map(
            (data, index) => {
                return (
                    <>
                        <div className="expiry-report-data-div">
                            <div className="expiry-report-data">
                                <p className="expiry-report-data-label">
                                    {data.DAYS}
                                </p>
                            </div>
                            <div className="expiry-report-data">
                                <p className="expiry-report-data-label">
                                    {data.PRE_END_DATE}
                                </p>
                            </div>
                            <div className="expiry-report-data">
                                <p
                                    className="expiry-report-data-label"
                                    style={{
                                        width: "10px",
                                        color: "#0090DA",
                                        borderBottom: "2px solid #0090DA",
                                        paddingBottom: "2px",
                                        fontWeight: 700,
                                    }}
                                    onClick={() => {
                                        let Items = showItems.slice();
                                        Items[index] = !Items[index];
                                        setshowItems(Items);
                                    }}
                                >
                                    {data.COUNT}
                                </p>
                            </div>
                        </div>
                        <div>
                            {showItems[index] ? (
                                <ExpiryCount
                                    date={
                                        expiryResponse.stb_report[index]
                                            .PRE_END_DATE
                                    }
                                />
                            ) : null}
                        </div>
                    </>
                );
            }
        );
        return SubExpiryDataList;
    };

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
                        <p className="expiry-report-head-label">Days Away</p>
                    </div>
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Expiry Date</p>
                    </div>
                    <div className="expiry-report-head">
                        <p className="expiry-report-head-label">Count</p>
                    </div>
                </div>
            </div>

            <div className="expiry-data">
                {isLoading && (
                    <div>
                        <Spinner animation="border" variant="info" style={{marginTop:"50px"}}/>
                    </div>
                )}
                {expiryResponse && subExpiryList()}
            </div>
            <div className="float-div-expiry">
                <button className="float-btn">PRINT REPORT</button>
            </div>
        </div>
    );
}
