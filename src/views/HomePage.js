import React from "react";
import Navbar from "../components/navbar";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import loginAPI from "../services/authApi";
import { useState, useEffect } from "react";

import "../css/HomeStyles.css";
import "../css/global.css";
import "../css/alert_popup.css";
import "reactjs-popup/dist/index.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function HomePage() {
    useEffect(() => {
        console.log(localStorage.getItem("user"));
        console.log(localStorage.getItem("rememberMe"));
    }, []);

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

    const getHomeData = () => {
        if (userJson) {
            loginAPI
                .post("getagentsummary", {
                    agent_id: userJson.agentId,
                })

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

                .catch((e) => {
                    console.log(e);
                });
        }
    };

    //   const handleAlertOpen = () => {
    //     window.close();
    //     setalert(false);
    //   };

    useEffect(() => {
        // get back click event and also create a alert event
        // window.addEventListener("popstate", function (e) {
        //   e.preventDefault();
        //   e.stopPropagation();

        //   if (window.confirm("Do you want to exit?")) {
        //     // window.location.href = 'about:blank';
        //     // window.close();
        //     window.history.pushState({}, '');

        //   }
        // });
        window.history.pushState({}, "");
        window.addEventListener("popstate", function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.history.pushState({}, "");
        });

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
                            />
                        </div>
                    </div>

                    <p className="user_name">
                        {t("HO_lbl_wish")}{" "}
                        {userJson ? userJson.agentName : null}
                    </p>

                    <div className="amt-due-today-div">
                        <label className="amt-due-today-content">
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
            <Navbar value={0} />
        </>
    );
}
