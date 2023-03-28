import React from "react";
import Header from "../components/header";
import API from "../services/API";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import "../css/Complaints.css";
import "../css/global.css";

export default function Complaints() {
    const [Complaints, setComplaints] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const headerprops = {
        text: "View Complaints",
        height: "10vh",
    };
    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    const fetchComplaints = () => {
        try {
            API.viewCompalintAPI({
                agent_id: user.agentId,
            }).then((response) => {
                setLoading(false);
                // console.log(response.data.complaints);
                setComplaints(response.data.complaints);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchComplaints();
    }, []);

    const CompViewList = ({ complaints }) => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
        };

        const formatTime = (dateString) => {
            const date = new Date(dateString);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const amPm = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            return `${formattedHours}:${formattedMinutes}${amPm}`;
        };
        const CompViewDataList = complaints.map((data) => (
            <div className="complaints-data-div">
                <tr>
                    <td className="complaints-name">{data.NAME}</td>
                </tr>
                <tr className="comp-line2">
                    <td className="complaints-id">{data.CUSTOMER_ID}</td>
                    <td></td>
                    <td>{formatTime(data.COMP_DATE)}</td>
                    <td className="complaint-date">
                        {formatDate(data.COMP_DATE)}
                    </td>
                </tr>
                <tr>
                    <td className="Place-complaint">{data.AREA}</td>
                    <td></td>
                    <td></td>
                    <td
                        className="complaint-status"
                        style={
                            data.COMP_STATUS === "REGISTERED"
                                ? { color: "#DC1515" }
                                : { color: "#0081B3" }
                        }
                    >
                        {data.COMP_STATUS}
                    </td>
                </tr>
            </div>
        ));
        return <>{CompViewDataList}</>;
    };

    return (
        <div className="container-complaints">
            <Header {...headerprops} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoading && (
                    <Spinner
                        animation="border"
                        variant="info"
                        style={{ marginTop: "100px" }}
                    />
                )}
            </div>
            <table className="complaints-table">
                <CompViewList complaints={Complaints} />
            </table>
        </div>
    );
}
