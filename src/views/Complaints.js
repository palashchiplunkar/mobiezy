import React from "react";
import "../css/Complaints.css";
import "../css/global.css";
import Header from "../components/header";
import API from "../services/API";
import { useEffect, useState } from "react";

export default function Complaints() {

    const Complaints = [
        {
            id: "VL0056708",
            name: "Yashwanth S Hassan",
            time: "06:07PM",
            date: "07/03/2023",
            location: "Vidyapeeta Layout",
            status: "Registered",
        },
        {
            id: "V1954645",
            name: "John Doe",
            time: "12:00PM",
            date: "12/12/2020",
            location: "Kathmandu",
            status: "In Progress",
        },
    ];

    const headerprops = {
        text: "View Complaints",
        height: "10vh",
    };
    const fetchComplaints = () => {
        try {
            API.viewCompalintAPI({
                agent_id:"11276"
            }).then((response) => {
                console.log(response.data);
                // setComplaints(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        fetchComplaints();
    }, []);

    const CompViewList = ({ complaints }) => {
        const CompViewDataList = complaints.map((data) => (
            <div className="complaints-data-div">
                <tr>
                    <td className="complaints-name">{data.name}</td>
                </tr>
                <tr className="comp-line2">
                    <td> {data.id}</td>
                    <td></td>
                    <td>{data.time}</td>
                    <td className="complaint-date">{data.date}</td>
                </tr>
                <tr>
                    <td className="Place-complaint">{data.location}</td>
                    <td></td>
                    <td></td>
                    <td
                        className="complaint-status"
                        style={
                            data.status === "Registered"
                                ? { color: "#DC1515" }
                                : { color: "#0081B3" }
                        }
                    >
                        {data.status}
                    </td>
                </tr>
            </div>
        ));
        return <>{CompViewDataList}</>;
    };

    return (
        <div className="container-complaints">
            <Header {...headerprops} />

            <table className="complaints-table">
                <CompViewList complaints={Complaints} />
            </table>
           
        </div>
    );
}
