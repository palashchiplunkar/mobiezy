import React from "react";
import { TfiMobile } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import "../css/PaymentHistory.css";

export default function PaymentHistory() {
    const navigate = useNavigate();
    let data = [
        {
            id: "SPT100111917520230227172227",
            mode: "Mobile",
            payMode: "Cash",
            time: "03:45 PM",
            date: "21-03-2023",
            totalPrice: "300",
            price: "275",
        },
        {
            id: "TNP100068984820230126130449",
            mode: "Office",
            payMode: "Cash",
            time: "11:55 AM",
            date: "22-01-2023",
            totalPrice: "25",
            price: "275",
        },
        {
            id: "TNP100131299720230126103605",
            mode: "Mobile",
            payMode: "Online Payment",
            time: "02:38 PM",
            date: "22-12-2022",
            totalPrice: "25",
            price: "275",
        },
        {
            id: "TNP100131299720230126103605",
            mode: "Mobile",
            payMode: "Online Payment",
            time: "02:38 PM",
            date: "22-12-2022",
            totalPrice: "25",
            price: "275",
        },
    ];
    return (
        <>
            <Header name={"Payment History"} link={"/collectPayment"} />
            <div style={{ height: "42vh" }}>
                <div className="StaticDiv">
                    <div className="customer-card-div-history">
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
                        <button
                            className="his-btn"
                            onClick={() => navigate("stbHistory")}
                        >
                            STB HISTORY
                        </button>
                    </div>
                    <button className="his-btn" style={{ width: "80%" }}>
                        PRINT TRANSACTION HISTORY
                    </button>
                </div>
            </div>

            <div className="ScrollingContainerParent">
                <div className="ScrollingContainer">
                    {data.map((val) => {
                        return (
                            <div style={{ width: "100%" }}>
                                <div className="customer-card-div-history-below">
                                    <div className="history-map-div1">
                                        <p className="card-date-p">
                                            SPT100111917520230227172227
                                        </p>
                                        <p className="card-date-p">₹300</p>
                                    </div>
                                    <div className="history-map-div1">
                                        <p className="card-date-p">Mobile</p>
                                        <p className="card-date-p">
                                            03:45 PM 22-01-2023
                                        </p>
                                    </div>
                                    <div className="history-map-div1">
                                        <p className="card-date-p">Cash</p>
                                        <p className="card-date-p">₹275</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
