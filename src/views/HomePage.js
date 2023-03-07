import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../css/HomeStyles.css";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import loginAPI from "../services/authApi";
import {useState, useEffect} from "react";
export default function HomePage() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [data, setData] = useState(JSON.parse(localStorage.getItem("homedata")) || {});
    let count=1;
    useEffect(() => {
        loginAPI.post("/getagentsummary", {"agent_id":"11276"})
        .then((response) => {
            console.log(response.data.report[0])
            if (response.data.report[0]) {
                setData(response.data.report[0]);
            }
            localStorage.setItem("homedata", JSON.stringify(response.data.report[0])); 
        })
        .catch((e) => {
            console.log(e)
            // alert(e.message);
        })
    }, []);


        


    return (
        <>
        <div class="container">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />
            <div>
                <div class="headerblue">
                    <MobileNavigation />
                    <p class="Company_name">
                        KOORG BROADBAND SERVICES <br></br>PRIVATE LIMITED
                    </p>

                    <div className="profile-img-div">
                        <img
                            src={require("../assets/profile.jpg")}
                            class="profile_img"
                        />
                    </div>
                </div>

                <p class="user_name">{t("HO_lbl_wish")} {data.OPERATOR_NAME}</p>

                <div class="amt-due-today-div">
                    <label className="amt-due-today-content">{t("HO_lbl_Unpaid")}</label>
                    <label className="amt-due-today-content">{data.pending_amount}</label>
                </div>

                <div class="amt-collected-month-div"
                onClick={() => navigate("/monthlyreport")}>
                    <label className="amt-collected-month-content">{t("HO_lbl_Collected")}</label>
                    <label className="amt-collected-month-content">{data.collected_amount}</label>
                </div>

                <div class="amt-collected-today-div"
                onClick={() => navigate("/dailyReport")}
                >
                    <label className="amt-collected-today-content">{t("HO_lbl_Daily")}</label>
                    <label className="amt-collected-today-content">{data.daily_collection_amount}</label>
                </div>

                <div class="complaints-div">
                    <label className="complaints-content">{t("HO_lbl_Complaints")}</label>
                    <label className="complaints-content">{data.no_of_complaints}</label>
                </div>

                <div className="collect-btn-div">
                    <button className="collectBtn" type="submit">
                        {t("HO_button_Collect_Bill")}
                    </button>
                </div>
            </div>
            
        </div>
        <Navbar value={0}/>
        </>
    );
}
