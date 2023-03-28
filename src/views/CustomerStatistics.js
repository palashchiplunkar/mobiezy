import React from "react";
import Header from "../components/header";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useState, useEffect } from "react";

import "../css/CustomerStatistics.css";
import "../css/global.css";
import API from "../services/API";
import { async } from "q";

export default function CustomerStatistics() {
  const [customerData, setcustomerData] = useState(null);
  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );
  const headerprops = {
    text: "Customer Statistics",
    height: "10vh",
  };
  const COLORS = ["#92d050", "#ffc000", "#ff0000"];

  const [realtimeData, setRealtimeData] = useState([
    { name: "Active Customers", value: 0 },
    { name: "Temporarily Disconnected", value: 0 },
    { name: "Permanently Disconnected", value: 0 },
  ]);

  const fetchCustomerData = () => {
    let body = {
      agentId: user.agentId,
      operatorId: user.operatorId,
    };
    API.customerSummary(body)
      .then((response) => {
        console.log(response)
        setcustomerData(response.data.report);

          
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);
useEffect(() => {
  
    setRealtimeData([
        { name: "Active Customers", value: customerData? customerData[0].Active:0 },
        { name: "Temporarily Disconnected", value: customerData? customerData[0].Suspended:0 },
        { name: "Permanently Disconnected", value: customerData? customerData[0].Cancelled:0 },
      ]);
}, [customerData])


  const legendFormatter = (value) => {
    const maxLegendLength = 12;
    return value.length > maxLegendLength
      ? `${value.slice(0, maxLegendLength)}...`
      : value;
  };

  const legendPayload = realtimeData.map((entry, index) => ({
    id: entry.name,
    type: "square",
    value: legendFormatter(entry.name),
    color: COLORS[index % COLORS.length],
  }));

  const CustomLegend = () => {
    return (
      <div className="custom-legend">
        {legendPayload.map((payload, index) => (
          <div key={payload.id} className="legend-item">
            <span
              className="legend-icon"
              style={{ backgroundColor: payload.color }}
            />
            <span className="legend-text">{payload.value}</span>
          </div>
        ))}
      </div>
    );
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
              {customerData ? customerData[0].Active :"--"}
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
              {customerData ? customerData[0].Suspended :"--"}
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
              {customerData ? customerData[0].Cancelled :"--"}

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
              {customerData ? customerData[0].Suspended+customerData[0].Cancelled+customerData[0].Active:"--"}

            </p>
          </div>
        </div>
      </div>
      <div className="PieChartDiv">
        <PieChart width={400} height={400} cy={150}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={realtimeData}
            cx={200}
            cy={150}
            outerRadius={130}
            innerRadius={70}
            fill="#8884d8"
          >
            {realtimeData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            align="center"
            verticalAlign="bottom"
            iconSize={10}
            wrapperStyle={{ width: "100%" }}
            payload={realtimeData.map((entry, index) => ({
              id: entry.name,
              type: "square",
              value: entry.name,
              color: COLORS[index % COLORS.length],
            }))}
            wordWrap={true}
            // width={400}
          />
        </PieChart>
      </div>
    </div>
  );
}
