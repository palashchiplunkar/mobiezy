import React from "react";
import { useState } from "react";
import "../css/RecordVisit.css";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

export default function RecordVisit() {
  const navigate= useNavigate();
  return (
    <>
      <Header name={"Record Your Visit"}/>
      <div className="container-record-visit">
        <div className="record-visit-form">
          <div className="record-visit-form-row">
            <div className="record-visit-form-label">Customer ID</div>
            <input
              className="record-visit-form-input"
              type="text"
              placeholder="Enter the Customer ID"
            />
          </div>
          <div className="record-visit-form-row">
            <div className="record-visit-form-label">Remarks</div>
            <input
              className="record-visit-form-input"
              type="text"
              placeholder="Enter Your Remarks"
            />
          </div>
          <div className="agent-visit-record-data">
            <table className="agent-visit-record-table">
              <tr>
                <td className="agent-visit-label">Name</td>
                <td className="agent-visit-colon">:</td>
                <td className="agent-visit-value">Yashwanth S Hassan</td>
              </tr>
              <tr>
                <td className="agent-visit-label">Agent ID</td>
                <td className="agent-visit-colon">:</td>
                <td className="agent-visit-value">YSH123</td>
              </tr>
              <tr>
                <td className="agent-visit-label">Time Stamp</td>
                <td className="agent-visit-colon">:</td>
                <td className="agent-visit-value">03:45 PM 21-03-2023</td>
              </tr>
            </table>
          </div>
          <button className="record-visit-button">SUBMIT</button>
          <button className="visited-history-button" onClick={()=>navigate("/historyVisit")}>
            VIEW VISITED HISTORY
          </button>
        </div>
      </div>
    </>
  );
}
