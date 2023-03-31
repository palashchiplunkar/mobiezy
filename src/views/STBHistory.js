import React from "react";

import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";

import Header from "../components/header";
import "../css/STBHistory.css";

export default function STBHistory() {
    const navigate = useNavigate();

    const headerProps = {
        text: "STB History",
        height: "10vh",
    };

    const data = [
        {
            stbNo: "1513C5644490054018",
            vcNo: "001769135078",
            dateTime: "03:45 PM  21-03-2023",
            status: "Active",
        },

        {
            stbNo: "1513C5644490054807",
            vcNo: "001769135087",
            dateTime: "02:38 PM  22-12-2022",
            status: "Suspended",
        },

        {
            stbNo: "1513C5644490054018",
            vcNo: "001769135078",
            dateTime: "06:55 PM  14-02-2021",
            status: "Cancelled",
        },
    ];

    const ViewList = ({ listData }) => {
        const connectionDataList = listData.map((data) => {
            <div style={{ width: "100%" }}>
                <div className="customer-card-div-history-below">
                    <div className="history-map-div1">
                        <p className="card-date-p">{data.stbNo}</p>
                        <p className="card-date-p">₹300</p>
                    </div>
                    <div className="history-map-div1">
                        <p className="card-date-p">Mobile</p>
                        <p className="card-date-p">03:45 PM 22-01-2023</p>
                    </div>
                    <div className="history-map-div1">
                        <p className="card-date-p">Cash</p>
                        <p className="card-date-p">₹275</p>
                    </div>
                </div>
            </div>;
        });
        return <>{connectionDataList}</>;
    };

    return (
        <>
            <Header name={"STB History"} link={"/collectPayment/history"}/>
            <div className="STBHistory-container">
                <div className="StaticDiv">
                    <div className="customer-card-div">
                        <div
                            className="card-div-history"
                            onClick={() => navigate("/collectPayment")}
                        >
                            <div className="card-group1-div">
                                <div class="card-line1-div">
                                    <p className="card-name-p">
                                        Name : Nikhith Gowda Subrahmanya
                                    </p>
                                </div>

                                <div className="card-line2-div">
                                    <p
                                        className="card-date-p"
                                        style={{ fontWeight: "700" }}
                                    >
                                        Customer ID : JB0213
                                    </p>
                                </div>

                                <div className="card-line3-div">
                                    <div style={{ display: "flex" }}>
                                        <TfiMobile className="card-mobileIcon" />
                                        <p className="card-phone-p">
                                            9740769579
                                        </p>
                                    </div>

                                    <p
                                        className="card-status-p"
                                        style={{
                                            backgroundColor: "Active"
                                                ? "#a0c334"
                                                : "Temporarily Disconnected"
                                                ? "#DC1515"
                                                : "#000000",

                                            width: "70px",
                                        }}
                                    >
                                        Active
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hty-btn-hzl">
                        <button className="his-btn">PAYMENT HISTORY</button>
                        <button className="his-btn">STB HISTORY</button>
                    </div>

                    <div style={{ width: "90%", overflowX: "scroll" }}>
                        {data.map((val) => {
                            return (
                                <div style={{ width: "100%" }}>
                                    <div className="stb-card-div">
                                        <div className="stb-div">
                                            <p className="stb-p">{val.stbNo}</p>
                                        </div>
                                        <div className="stb-div">
                                            <p className="vcNo-p">{val.vcNo}</p>
                                        </div>
                                        <div className="stb-div">
                                            <p className="date-time-p">
                                                {val.dateTime}
                                            </p>
                                            <p
                                                className="card-status-p"
                                                style={{
                                                    backgroundColor:
                                                        val.status == "Active"
                                                            ? "#a0c334"
                                                            : val.status ==
                                                              "Suspended"
                                                            ? "#DC1515"
                                                            : "#000000",

                                                    width: "70px",
                                                }}
                                            >
                                                {val.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
