import React from "react";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/header";

import "../css/MoreOptions.css";
import "../css/global.css";

function MoreOptions() {
    
    const navigate = useNavigate();
    
    let options = [
        {
            id: 1,
            name: "Daily Report",
            imgUrl: "daily2.png",
            toLink: "/dailyReport",
        },
        {
            id: 2,
            name: "Monthly Report",
            imgUrl: "monthly.png",
            toLink: "/monthlyReport",
        },
        {
            id: 3,
            name: "Expiry Report",
            imgUrl: "expiry.png",
            toLink: "/subExpiryReport",
        },
        {
            id: 4,
            name: "View Complaints",
            imgUrl: "complain1.png",
            toLink: "/complaints",
        },
        {
            id: 5,
            name: "Customer Summary",
            imgUrl: "summary.png",
            toLink: "/customerStatistics",
        },
        {
            id: 6,
            name: "Area-wise Due Report ",
            imgUrl: "due.png",
            toLink: "/areaWiseReport",
        },
        {
            id: 7,
            name: "Renewal Report",
            imgUrl: "renewal.png",
            toLink: "",
        },
        {
            id: 8,
            name: "Wallet Recharge",
            imgUrl: "wallet.png",
            toLink: "",
        },
    ];
    const headerprops = {
        text: "More Options",
        height: "10vh",
    };
    useEffect (() => {
    window.history.pushState({}, '');
    window.addEventListener("popstate", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.history.pushState({}, '');
    }
    );
  }, [])
    return (
        <>
            <div>
                <Header {...headerprops} />
                <div className="OptionsContainer">
                    {options.map((option) => {
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
