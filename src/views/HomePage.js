import React from "react";

import Navbar from "../components/navbar";
import "../css/HomeStyles.css";
import MobileNavigation from "../components/hamnavigation";
import { useTranslation } from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();

    return (
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

                <div class="amount_due">
                    <label className="Amt_Due">{t("HO_lbl_Unpaid")}</label>
                    <label className="Amt_Due">2310086.00</label>
                </div>

                <div class="amount_collected_month">
                    <label className="Amt_Due">{t("HO_lbl_Collected")}</label>
                    <label className="Amt_Due">10086</label>
                </div>

                <div class="amount_collected_today">
                    <label className="Amt_Due">{t("HO_lbl_Daily")}</label>
                    <label className="Amt_Due">2100</label>
                </div>

                <div class="complaints">
                    <label className="Amt_Due">{t("HO_lbl_Complaints")}</label>
                    <label className="Amt_Due">12</label>
                </div>

                <div className="collect-btn-div">
                    <button className="collectBtn" type="submit">
                        {t("HO_button_Collect_Bill")}
                    </button>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
