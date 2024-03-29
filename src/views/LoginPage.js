import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../services/API";
import ReactLoading from "react-loading";

import "../css/LoginStyles.css";
import "../css/global.css";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [UError, setUError] = useState("");
    const [PError, setPError] = useState("");
    const [user, setUser] = useState(localStorage.getItem("username") || "");
    const [pwd, setPwd] = useState("");
    const [rememberMe, setRememberMe] = useState(
        localStorage.getItem("rememberMe") || false
    );

    const onchangeuser = (value) => {
        setUser(value);
        setUError("");
    };

    const onchangepass = (value) => {
        setPwd(value);
        setPError("");
    };

    const handleSubmit = (e) => {

        setIsLoading(true);
        if (user === "" && pwd === "") {
            setUError("Please enter Username");
            setPError("Please enter Password");
            setIsLoading(false);
            return;
        } else if (user === "") {
            setUError("Please Enter Username");
            setIsLoading(false);
            return;
        } else if (pwd === "") {
            setPError("Please Enter Password");
            setIsLoading(false);
            return;
        }

        let userData = {
            username: user,
            password: pwd,
        };

        API
            .loginAPI(userData)
                .then((response) => {
               
                    if (response.data.messageText === "UNAUTHORIZED") {
                        setUError("Invalid Username!");
                        setPError("Invalid Password!");
                        navigate("/");
                    } 
                    
                    else {
                        
                        var stringuserjson = JSON.stringify(response.data);
                        if (rememberMe) {

                            localStorage.setItem("user", stringuserjson);
                            localStorage.setItem("username", user);
                            localStorage.setItem("rememberMe", true);
                        } 
                        else {
                            sessionStorage.setItem("user", stringuserjson);
                        }
                        navigate("/home");
                    }
                    setIsLoading(false);
                })

                .catch((e) => {
                    console.log(e);
                    setIsLoading(false);
                });
    };

    const { t } = useTranslation();

    return (
        <div className="App">
            <div className="ImageContainer">
                <img
                    className="header-img1"
                    src={require("../assets/d1.png")}
                    alt=""
                />
                <img
                    className="mobicable-logo"
                    src={require("../assets/MobiCable.jpg")}
                    alt=""
                />
            </div>
            <div className="authForm">
                <div className="inputGroup">
                    <label className="user-label">{t("LP_lbl_UserName")}</label>
                    <input
                        required={true}
                        type="text"
                        autoComplete="off"
                        className="username"
                        placeholder={t("LP_data_UserName")}
                        onChange={(e) => onchangeuser(e.target.value)}
                        value={user}
                        style={{
                            borderBottomColor: UError ? "red" : "#333333",
                        }}
                    />
                    <p
                        style={{
                            color: "red",
                            visibility: UError ? "visible" : "hidden",
                        }}
                    >
                        {UError}
                    </p>
                </div>
                <div className="inputGroup">
                    <label className="passwd-label">
                        {t("LP_lbl_Password")}
                    </label>
                    <input
                        required={true}
                        type="password"
                        autoComplete="off"
                        className="passwd"
                        placeholder={t("LP_data_Password")}
                        onChange={(e) => onchangepass(e.target.value)}
                        value={pwd}
                        style={{
                            borderBottomColor: PError ? "red" : "#333333",
                        }}
                    />

                    <p
                        style={{
                            color: "red",
                            visibility: PError ? "visible" : "hidden",
                        }}
                    >
                        {PError}
                    </p>
                </div>
                <div
                    className="remember-me-div"
                    style={{
                        visibility: localStorage.getItem("rememberMe")
                            ? "hidden"
                            : "visible",
                    }}
                >
                    <input
                        className="rmcb"
                        type="checkbox"
                        id="remberme"
                        onChange={(e) => setRememberMe(e.target.checked)}
                        value={rememberMe}
                    />
                    <label className="rememberme">
                        {t("LP_lbl_Remember_Me")}
                    </label>
                </div>
            </div>
            <div className="login-btn-div">
                <button className="loginBtn" onClick={() => handleSubmit()}>
                    {t("LP_Button_Login")}
                </button>
            </div>

            <p className="version">{t("LP_lbl_Version")}</p>

            <div style={{ display: "flex", justifyContent: "center" }}>
                {isLoading && (
                    <ReactLoading
                        type={"bars"}
                        color={"#0090da"}
                        height={75}
                        width={75}
                    />
                )}
            </div>
        </div>
    );
}
