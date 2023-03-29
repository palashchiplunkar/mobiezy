import React from "react";

import Header from "../components/header";
import "../css/HistoryVisit.css";

export default function HistoryVisit() {
    const headerProps = {
        text: "History of Visit",
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

    const ViewList = ({ listData }) => {
        const ViewDataList = listData.map((data) => (
            <>
                <tbody className="agnt-border">
                    <tr className="agnt-tr">
                        <td className="agnt-name-label-td">Visited Agent</td>
                        <td className="agnt-colon-td"> : </td>
                        <td className="agnt-name-data-td">
                            {data.visitedAgnt}
                        </td>
                    </tr>
                    <tr className="agnt-tr">
                        <td className="agnt-time-label-td">Visited Time</td>
                        <td className="agnt-colon-td"> : </td>
                        <td className="agnt-time-data-td">
                            {data.visitedTime}
                        </td>
                    </tr>
                </tbody>
            </>
        ));

        return <>{ViewDataList}</>;
    };

    return (
        <div className="history-visit-container">
            <Header {...headerProps} />

            <div className="cust-details-div">
                <table className="cust-details-table">
                    <tbody>
                    <tr className="cust-name-tr">
                        <td className="cust-name-label-td">Customer Name</td>
                        <td className="cust-colon-td"> : </td>
                        <td className="cust-name-data-td">Sharath S Naik</td>
                    </tr>
                    <tr className="cust-id-tr">
                        <td className="cust-id-label-td">Customer ID</td>
                        <td className="cust-colon-td"> : </td>
                        <td className="cust-id-data-td">213</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="agnt-details-div">
                <table className="agnt-details-table">
                    <ViewList listData={tempData} />
                </table>
            </div>
        </div>
    );
}
