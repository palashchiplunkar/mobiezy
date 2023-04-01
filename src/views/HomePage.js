import React from "react";
import Navbar from "../components/navbar";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import API from "../services/API";
import { useState, useEffect } from "react";

import "../css/HomeStyles.css";
import "../css/global.css";
import "../css/alert_popup.css";
import "reactjs-popup/dist/index.css";

export default function HomePage() {
    window.onbeforeunload = function () {
        console.log("Your data will be lost!");
    };

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("homedata")) || {}
    );

    let userJson;

    const user = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (user) {
        userJson = JSON.parse(user);
    }

    let agentData = {
        agent_id: userJson.agentId,
    };

    const getHomeData = () => {
        if (userJson) {
            API.agentSummaryAPI(agentData)

                .then((response) => {
                    if (response.data.report[0]) {
                        setData(response.data.report[0]);
                    }

                    localStorage.setItem(
                        "homedata",
                        JSON.stringify(response.data.report[0])
                    );

                    sessionStorage.setItem(
                        "homedata",
                        JSON.stringify(response.data.report[0])
                    );
                })

                .catch((error) => {
                    console.log(error.code);
                });
        }
    };

    

    window.addEventListener('load', function() {
        window.history.pushState({ noBackExitsApp: true }, '')
      })
      
      window.addEventListener('popstate', function(event) {
        if (event.state && event.state.noBackExitsApp) {
          window.history.pushState({ noBackExitsApp: true }, '')
        }
      })

    useEffect(() => {
        // window.history.pushState({}, "");
        // window.addEventListener("popstate", function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     window.history.pushState({}, "");
        // });

        getHomeData();
    }, []);

    return (
        <>
            <div className="container">
                <div>
                    <div className="headerblue">
                        <MobileNavigation />
                        <p className="Company_name">
                            {userJson ? userJson.operatorName : null}
                        </p>

                        <div className="profile-img-div">
                            <img
                                src={require("../assets/profile.jpg")}
                                className="profile_img"
                                alt=""
                            />
                        </div>
                    </div>

                    <p className="user_name">
                        {t("HO_lbl_wish")}{" "}
                        {userJson ? userJson.agentName : null}
                    </p>

                    <div className="amt-due-today-div">
                        <label
                            className="amt-due-today-content"
                            onClick={() => navigate("/customer")}
                        >
                            {t("HO_lbl_Unpaid")}
                        </label>
                        <label className="amt-due-today-content">
                            {data.pending_amount}
                        </label>
                    </div>

                    <div
                        className="amt-collected-month-div"
                        onClick={() => navigate("/monthlyreport")}
                    >
                        <label className="amt-collected-month-content">
                            {t("HO_lbl_Collected")}
                        </label>
                        <label className="amt-collected-month-content">
                            {data.collected_amount}
                        </label>
                    </div>

                    <div
                        className="amt-collected-today-div"
                        onClick={() => navigate("/dailyReport")}
                    >
                        <label className="amt-collected-today-content">
                            {t("HO_lbl_Daily")}
                        </label>
                        <label className="amt-collected-today-content">
                            {data.daily_collection_amount}
                        </label>
                    </div>

                    <div className="complaints-div">
                        <label className="complaints-content">
                            {t("HO_lbl_Complaints")}
                        </label>
                        <label className="complaints-content">
                            {data.no_of_complaints}
                        </label>
                    </div>

                    <div className="collect-btn-div">
                        <button
                            className="collectBtn"
                            type="submit"
                            onClick={() => navigate("/collectPayment")}
                        >
                            {t("HO_button_Collect_Bill")}
                        </button>
                    </div>
                </div>
            </div>

            <Navbar
                value={0}
                onChange={() => {
                    window.location.reload();
                }}
            />
        </>
    );
}
