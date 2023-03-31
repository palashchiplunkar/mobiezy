import React, { useState, useEffect } from "react";
import "../css/RecordVisit.css";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@mui/material";

import API from "../services/API";

export default function RecordVisit() {
    const navigate = useNavigate();

    const [alert, setalert] = useState(false);
    const [apiResponseTitle, setAPIResponseTitle] = useState("");
    const [apiResponseContent, setAPIResponseContent] = useState("");
    const [CError, setCustError] = useState("");
    const [RError, setRemarkError] = useState("");

    var dateTime = {
        hours: null,
        minutes: null,
        seconds: null,
        day: null,
        month: null,
        year: null,
    };

    let currentDate = new Date();

    const setDateTime = () => {
        dateTime.hours = currentDate.getHours();
        dateTime.minutes = currentDate.getMinutes();
        dateTime.seconds = currentDate.getSeconds();

        if (dateTime.hours < 10) {
            dateTime.hours = "0" + dateTime.hours;
        }

        if (dateTime.minutes < 10) {
            dateTime.minutes = "0" + dateTime.minutes;
        }

        dateTime.day = currentDate.getDate();
        dateTime.month = currentDate.getMonth() + 1;
        dateTime.year = currentDate.getFullYear();

        if (dateTime.day < 10) {
            dateTime.day = "0" + dateTime.day;
        }

        if (dateTime.month < 10) {
            dateTime.month = "0" + dateTime.month;
        }

        let temp =
            dateTime.year +
            "-" +
            dateTime.month +
            "-" +
            dateTime.day +
            " " +
            dateTime.hours +
            ":" +
            dateTime.minutes +
            ":" +
            dateTime.seconds;

        return temp;
    };

    const [customerID, setCustomerID] = useState("");
    const [remark, setRemark] = useState("");

    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    const handleSubmit = () => {
        const customerData = {
            customerId: customerID,
            agentId: user.agentId,
            operatorId: user.operatorId,
            dateTime: setDateTime(),
            FLAG: "A",
            remarks: remark,
        };

        if (customerID === "" && remark === "") {
            setCustError("Please Enter Customer ID");
            setRemarkError("Please Enter Remarks");
            return;
        } else if (customerID === "") {
            setCustError("Please Enter Customer ID");
            return;
        } else if (remark === "") {
            setRemarkError("Please Enter Remarks");
            return;
        }

        API.recordVisit(customerData)
            .then((response) => {
                console.log(response);
                if(response.data.p_out_mssg === "Success"){
                    setAPIResponseTitle(response.data.p_out_mssg);
                    setAPIResponseContent("Remark Submitted Successfully");
                }
                else{
                    setAPIResponseTitle("Error");
                    setAPIResponseContent(response.data.p_out_mssg);
                }
                
                setalert(true);
            })

            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Header name={"Record Your Visit"} link={"/collectPayment/"} />
            <div className="container-record-visit">
                <div className="record-visit-form">
                    <div className="record-visit-form-row">
                        <div className="record-visit-form-label">
                            Customer ID
                        </div>
                        <input
                            className="record-visit-form-input"
                            type="text"
                            placeholder="Enter the Customer ID"
                            value={customerID}
                            onChange={(e) => {
                                setCustomerID(e.target.value);
                                setCustError("");
                            }}
                            style={{
                                borderBottomColor: CError ? "red" : "#333333",
                            }}
                        />
                        <p
                            style={{
                                color: "red",
                                visibility: CError ? "visible" : "hidden",
                            }}
                        >
                            {CError}
                        </p>
                    </div>
                    <div className="record-visit-form-row">
                        <div className="record-visit-form-label">Remarks</div>
                        <input
                            className="record-visit-form-input"
                            type="text"
                            placeholder="Enter Your Remarks"
                            value={remark}
                            onChange={(e) => {
                                setRemark(e.target.value);
                                setRemarkError("");
                            }}
                            style={{
                                borderBottomColor: RError ? "red" : "#333333",
                            }}
                        />
                        <p
                            style={{
                                color: "red",
                                visibility: RError ? "visible" : "hidden",
                            }}
                        >
                            {RError}
                        </p>
                    </div>
                    <div className="agent-visit-record-data">
                        <table className="agent-visit-record-table">
                            <tr>
                                <td className="agent-visit-label">Name</td>
                                <td className="agent-visit-colon">:</td>
                                <td className="agent-visit-value">
                                    {user.agentName}
                                </td>
                            </tr>
                            <tr>
                                <td className="agent-visit-label">Agent ID</td>
                                <td className="agent-visit-colon">:</td>
                                <td className="agent-visit-value">
                                    {user.agentId}
                                </td>
                            </tr>
                            {/* <tr>
                                <td className="agent-visit-label">
                                    Visited Time
                                </td>
                                <td className="agent-visit-colon">:</td>
                                <td className="agent-visit-value">{fullDateTime}</td>
                            </tr> */}
                        </table>
                    </div>
                    <button
                        className="record-visit-button"
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </button>
                    <button
                        className="visited-history-button"
                        onClick={() => navigate("historyVisit")}
                    >
                        VIEW VISITED HISTORY
                    </button>
                    <Dialog
                        open={alert}
                        onClose={() => setalert(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle
                            id="alert-dialog-title"
                            style={{ fontFamily: "Noto Sans" }}
                        >
                            {apiResponseTitle}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText
                            id="alert-dialog-description"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "Noto Sans",
                                color: "black",
                                border: "none",
                                margin: "10px",
                                padding: "5px",
                            }}
                        >
                            {apiResponseContent}
                        </DialogContentText>
                    </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    );
}
