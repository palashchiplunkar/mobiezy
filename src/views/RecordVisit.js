import React from "react";
import { useState } from "react";
import "../css/RecordVisit.css";
import Header from "../components/header";

export default function RecordVisit() {
  const headerprops = {
    text: "Record Your Visit",
    height: "10vh",
  };
  return (
    <div className="container-record-visit">
      <Header {...headerprops} />

      <div className="record-visit-form">
        <div className="record-visit-form-row">
            <div className="record-visit-form-label">Customer ID</div>
            <input className="record-visit-form-input" type="text" placeholder="Enter the Customer ID"/>
        </div>
      </div>
    </div>
  );
}
