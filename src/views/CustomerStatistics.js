import React from "react";
import Header from "../components/header";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useState, useEffect } from "react";

import "../css/CustomerStatistics.css";
import "../css/global.css";

export default function CustomerStatistics() {

    const headerprops = {
        text: "Customer Statistics",
        height: "10vh",
    };
    const data = [
        { name: "Active Customers", value: 0 },
        { name: "Temporarily Disconnected", value: 0 },
        { name: "Permanently Disconnected", value: 0 },
    ];

    const COLORS = ["#92d050", "#ffc000", "#ff0000"];

    const [realtimeData, setRealtimeData] = useState(data);

    useEffect(() => {
        // Replace this with your code to fetch real-time data
        const interval = setInterval(() => {
            setRealtimeData([
                { name: "Active Customers", value: 1544 },
                { name: "Temporarily Disconnected", value: 51 },
                { name: "Permanently Disconnected", value: 11 },
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
                        <br></br>
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
                        <p className="customer-statistics-data-label">
                            Active Customers
                        </p>
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
                        // wrapperStyle={{ width: "100%" }}
                        // payload={realtimeData.map((entry, index) => ({
                        //   id: entry.name,
                        //   type: "square",
                        //   value: entry.name,
                        //   color: COLORS[index % COLORS.length],
                        // }))}
                        // wordWrap={true}
                        // width={400}
                        content={<CustomLegend />}
                    />
                </PieChart>
            </div>
        </div>
    );
}
