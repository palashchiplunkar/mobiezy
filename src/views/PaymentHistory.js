import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";
import "../css/PaymentHistory.css";
export default function PaymentHistory() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="HomeHeader">
                <FaAngleLeft
                    onClick={() => navigate("/home")}
                    style={{
                        color: "white",
                        height: "25px",
                        marginLeft: "20px",
                    }}
                />
                <p className="HeaderLabelHistory">Payment History</p>
            </div>
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
                                    <p className="card-phone-p">9740769579</p>
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
                    <button className="his-btn">STB HISTORY</button>
                </div>
                <button className="his-btn" style={{ width: "80%" }}>
                    PRINT TRANSACTION HISTORY
                </button>
                <div style={{ height: "100%", overflowY: "scroll" }}></div>
            </div>
        </div>
    );
}
