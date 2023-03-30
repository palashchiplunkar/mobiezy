import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header";

import "../css/MoreOptions.css";
import "../css/global.css";

function MoreOptions() {

    const navigate = useNavigate();
    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );
    const MSO_ID = user.MSO_ID;

    let options = [
        {
            id: 1,
            name: "Daily Report",
            imgUrl: "daily_report.png",
            toLink: "/dailyReport",
            toShow: true,
        },
        {
            id: 2,
            name: "Monthly Report",
            imgUrl: "monthly_report.png",
            toLink: "/monthlyReport",
            toShow: true,
        },
        {
            id: 3,
            name: "Expiry Report",
            imgUrl: "Expiry_report.png",
            toLink: "/subExpiryReport",
            toShow: true,
        },
        {
            id: 4,
            name: "View Complaints",
            imgUrl: "complaints.png",
            toLink: "/complaints",
            toShow: true,
        },
        {
            id: 5,
            name: "Customer Summary",
            imgUrl: "cust_summary.png",
            toLink: "/customerStatistics",
            toShow: true,
        },
        {
            id: 6,
            name: "Area-wise Due Report ",
            imgUrl: "due.png",
            toLink: "/areaWiseReport",
            toShow: true,
        },
        {
            id: 7,
            name: "Renewal Report",
            imgUrl: "renewal.png",
            toLink: "",
            toShow : MSO_ID === 0 ? false : true,
        },
        {
            id: 8,
            name: "Wallet Recharge",
            imgUrl: "wallet.png",
            toLink: "",
            toShow : MSO_ID === 0 ? false : true,
        },
    ];

    const headerprops = {
        text: "More Options",
        height: "10vh",
    };

    useEffect(() => {
        window.history.pushState({}, "");
        window.addEventListener("popstate", function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.history.pushState({}, "");
        });
    }, []);
    
    return (
        <>
            <div>
                <Header {...headerprops} />
                <div className="OptionsContainer">
                    {options.map((option) => {
                        if (!option.toShow) return null;
                        return (
                            <div
                                className="EachOption"
                                id={option.id}
                                onClick={() => navigate(option.toLink)}
                            >
                                <img
                                    src={require("../assets/" + option.imgUrl)}
                                    alt={option.name}
                                    width={"45%"}
                                />
                                <p>{option.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Navbar value={2} />
        </>
    );
}

export default MoreOptions;
