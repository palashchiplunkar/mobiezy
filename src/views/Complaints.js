import React from "react";
import "../css/Complaints.css";
import "../css/global.css";
import Header from "../components/header";
import API from "../services/API";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Complaints() {
  // const Complaints = [
  //   {
  //     id: "VL0056708",
  //     name: "Yashwanth S Hassan",
  //     time: "06:07PM",
  //     date: "07/03/2023",
  //     location: "Vidyapeeta Layout",
  //     status: "Registered",
  //   },
  //   {
  //     id: "V1954645",
  //     name: "John Doe",
  //     time: "12:00PM",
  //     date: "12/12/2020",
  //     location: "Kathmandu",
  //     status: "In Progress",
  //   },
  // ];
  const [Complaints, setComplaints] = useState([]);
  const [FormatDate, setFormatDate] = useState([]);
  const [FormatTime, setFormatTime] = useState([]);

  
  const headerprops = {
    text: "View Complaints",
    height: "10vh",
  };
  const user = JSON.parse( localStorage.getItem("user") || sessionStorage.getItem("user") );

  const fetchComplaints = () => {
    try {
    API.viewCompalintAPI({
      agent_id:"11276",
  }).then((response) => {
    
        console.log(response.data.complaints);
        setComplaints(response.data.complaints);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const CompViewList = ({ complaints }) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };
  
    const formatTime = (dateString) => {
      const date = new Date(dateString);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amPm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes} ${amPm}`;
    };
    const CompViewDataList = complaints.map((data) => (
      <div className="complaints-data-div">
        <tr>
          <td className="complaints-name">{data.NAME}</td>
        </tr>
        <tr className="comp-line2">
          <td> {data.CUSTOMER_ID}</td>
          <td></td>
          <td>{formatTime(data.COMP_DATE)}</td>
          <td className="complaint-date">{formatDate(data.COMP_DATE)}</td>
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

      <table className="complaints-table">
        <CompViewList complaints={Complaints} />
      </table>
    </div>
  );
}
