import React from "react";

import Header from "../components/header";
import "../css/global.css";

export default function HistoryVisit() {
    const headerProps = {
        text: "History of Visits",
        height: "10vh",
    };

    const tempData = [
        {
            visitedAgnt: "Yashwanth S Hassan",
            visitedTime: "03:45 PM 21-03-2023",
        },

        {
            visitedAgnt: "Dinesh Kumar",
            visitedTime: "02:38 PM 22-12-2022",
        },

        {
            visitedAgnt: "Yashwanth S Hassan",
            visitedTime: "11:36 AM 19-10-2022",
        },
    ];

    return (
        <>
            <div className="container">
                <p>Hello</p>
            </div>
        </>
    );
}
