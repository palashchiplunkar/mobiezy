import React from "react";
import "../css/CustomerStatistics.css";
import "../css/global.css";
import Header from "../components/header";
export default function CustomerStatistics() {

  const headerprops = {
    text: "Customer Statistics",
    height: "10vh",
  };

  return (
    <div className="container-customer-statistics">
      <Header {...headerprops} />
      <div className="customer-statistics-data-container">
        <div className="customer-statistics-data-div-1">
          <div className="customer-statistics-data-12">
            <p className="customer-statistics-data-label">Active Customers</p>
          </div>
          <div className="customer-statistics-data-1">
            <p className="customer-statistics-data-label">:</p>
          </div>
          <div className="customer-statistics-data-1">
            <p
              className="customer-statistics-data-label-number"
              style={{
                color: "#3AA45E",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "16px",
                letterSpacing: "0.2px",
              }}
            >
              {" "}
              1544
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="customer-statistics-data-div-2">
          <div className="customer-statistics-data-12">
            <p className="customer-statistics-data-label">
              Temporarily Disconnected
            </p>
          </div>
          <div className="customer-statistics-data-2">
            <p className="customer-statistics-data-label">:</p>
          </div>
          <div className="customer-statistics-data-2">
            <p
              className="customer-statistics-data-label-number"
              style={{
                color: "#000000",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "16px",
                letterSpacing: "0.2px",
              }}
            >
              51
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="customer-statistics-data-div-3">
          <div className="customer-statistics-data-12">
            <p className="customer-statistics-data-label">
              Permanently Disconnected
            </p>
          </div>
          <div className="customer-statistics-data-3">
            <p className="customer-statistics-data-label">:</p>
          </div>
          <div className="customer-statistics-data-3">
            <p
              className="customer-statistics-data-label-number"
              style={{
                color: "#000000",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "16px",
                letterSpacing: "0.2px",
              }}
            >
              11
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="customer-statistics-data-div-4">
          <div className="customer-statistics-data-12">
            <p className="customer-statistics-data-label">
              Total Number of Customers
            </p>
          </div>
          <div className="customer-statistics-data-4">
            <p className="customer-statistics-data-label">:</p>
          </div>
          <div className="customer-statistics-data-4">
            <p
              className="customer-statistics-data-label-number"
              style={{
                color: "#DC1515",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "16px",
                letterSpacing: "0.2px",
              }}
            >
              1606
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
