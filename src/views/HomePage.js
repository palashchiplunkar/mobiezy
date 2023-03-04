import React from "react";

import Navbar from "../components/navbar";
import "../css/HomeStyles.css";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { t } = useTranslation();
    const navigate = useNavigate();


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

                <p class="user_name">{t("HO_lbl_wish")} Dinesh</p>

                <div class="amt-due-today-div">
                    <label className="amt-due-today-content">{t("HO_lbl_Unpaid")}</label>
                    <label className="amt-due-today-content">2310086.00</label>
                </div>

                <div class="amt-collected-month-div"
                onClick={() => navigate("/monthlyreport")}>
                    <label className="amt-collected-month-content">{t("HO_lbl_Collected")}</label>
                    <label className="amt-collected-month-content">10086</label>
                </div>

                <div class="amt-collected-today-div">
                    <label className="amt-collected-today-content">{t("HO_lbl_Daily")}</label>
                    <label className="amt-collected-today-content">2100</label>
                </div>

                <div class="complaints-div">
                    <label className="complaints-content">{t("HO_lbl_Complaints")}</label>
                    <label className="complaints-content">12</label>
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
