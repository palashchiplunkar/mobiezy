import React from "react";
import Navbar from "../components/navbar";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import loginAPI from "../services/authApi";
import { useState, useEffect } from "react";

import "../css/HomeStyles.css";
import "../css/global.css";

export default function HomePage() {
<<<<<<< HEAD
    useEffect(()=>{
        console.log(localStorage.getItem("user"))
        console.log(localStorage.getItem("rememberMe"))

    },[])

=======
>>>>>>> ee74965a1bafc68cb6e4413c5b9b81867ab18fa6
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

    useEffect(() => {
<<<<<<< HEAD
        
=======
>>>>>>> ee74965a1bafc68cb6e4413c5b9b81867ab18fa6
        getHomeData();
    }, []);

    return (
        <>
            <div className="container">
<<<<<<< HEAD

=======
>>>>>>> ee74965a1bafc68cb6e4413c5b9b81867ab18fa6
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
                        <button className="collectBtn" type="submit">
                            {t("HO_button_Collect_Bill")}
                        </button>
                    </div>
                </div>
            </div>
            <Navbar value={0} />
        </>
    );
}
