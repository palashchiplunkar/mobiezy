import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginStyles.css";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/home");
    };
    const { t } = useTranslation();
    return (
        <div className="App">
            <img className="bg-img" src={require("../assets/BG.JPG")} />
            <div className="authForm">
                <img
                    className="header-img1"
                    src={require("../assets/d1.png")}
                />
                <img
                    className="mobicable-logo"
                    src={require("../assets/MobiCable.jpg")}
                />

                <form className="login">
                    <label className="user-label">{t("LP_lbl_UserName")}</label>
                    <input
                        required="true"
                        type="text"
                        autocomplete="off"
                        className="username"
                        placeholder={t("LP_data_UserName")}
                    />

                    <label className="passwd-label">{t("LP_lbl_Password")}</label>
                    <input
                        required="true"
                        type="password"
                        autocomplete="off"
                        className="passwd"
                        placeholder={t("LP_data_Password")}
                    />

                    <div className="remember-me-div">
                        <input className="rmcb" type="checkbox" />
                        <label class="rememberme">{t("LP_lbl_Remember_Me")}</label>
                    </div>

                    <div className="login-btn-div">
                        <button
                            className="loginBtn"
                            onClick={() => handleSubmit()}
                        >
                            {t("LP_Button_Login")}
                        </button>
                    </div>
                </form>

                <p className="version">{t("LP_lbl_Version")}</p>
            </div>
        </div>
    );
}
