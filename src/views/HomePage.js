import React from "react";

import Navbar from "../components/navbar";
import "../css/HomeStyles.css";
import { useState } from "react";
// import MobileNavigation from "../components/hamnavigation";
import HamDrawer from "../components/hamburger";
import HamburgerDrawer from "react-hamburger-drawer";

export default function HomePage() {
    return (
        <div class="container">
            <img className="home-bg-img" src={require("../assets/BG.JPG")} />
            <div>
                <div class="headerblue">
                    {/* Add three lines for side navbar */}
                    {/* <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        </div> */}
                    
                    <p class="Company_name">
                        KOORG BROADBAND SERVICES <br></br>PRIVATE LIMITED
                    </p>

                    <img
                        src={require("../assets/profile.jpg")}
                        class="profile_img"
                    />
                </div>
                <p class="user_name">Hi, Dinesh</p>
                <div class="amount_due">
                    <label className="Amt_Due">
                        Total Amount Due as on Today
                    </label>
                    <label className="Amt_Due">2310086.00</label>
                </div>
                <div class="amount_collected_month">
                    <label className="Amt_Due">
                        Amount Collected in this Month
                    </label>
                    <label className="Amt_Due">10086</label>
                </div>
                <div class="amount_collected_today">
                    <label className="Amt_Due">
                        Amount Collected in this Today
                    </label>
                    <label className="Amt_Due">2100</label>
                </div>
                <div class="complaints">
                    <label className="Amt_Due">Number of Open Complaints</label>
                    <label className="Amt_Due">12</label>
                </div>
                <div class="complaints">
                    <label className="Amt_Due">Number of Open Complaints</label>
                    <label className="Amt_Due">12</label>
                </div>

                <div className="collect-btn-div">
                    <button className="collectBtn" type="submit">
                        COLLECT BILL
                    </button>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
