import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import loginAPI from "../services/authApi";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";

import "../css/LoginStyles.css";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (user) {
            navigate("/home");
        }
    }, []);

    const onchangeuser = (value) => {
        setUser(value);
        setError("");
    };

    const onchangepass = (value) => {
        setPwd(value);
        setError("");
    };

    const handleSubmit = (e) => {
        setIsLoading(true);
        if (user === "" || pwd === "") {
            // toast.error("Please enter username and password");
            setError("Please enter Username or Password");
            setIsLoading(false);
            return;
        }

        loginAPI
            .post("cableguy2-mobile-user-login-new", {
                freshInstall: "N",
                appVersion: "2.0.63",
                device_id: "2714",
                username: user,
                password: pwd,
            })

            .then((response) => {
                console.log(response);
                if (response.data.messageText === "UNAUTHORIZED") {
                    // toast.error("Invalid username or password");
                    setError("Invalid Username or Password");
                    navigate("/");
                } 
                else {

                    if (rememberMe) {
                        localStorage.setItem("user", user);
                    }
                    // use async
                    navigate("/home");
                }
                setIsLoading(false);
            })

            .catch((e) => {
                console.log(e);
                setError(e.message);
                setIsLoading(false);
            });
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

                {/* <form className="login"> */}
                <label className="user-label">{t("LP_lbl_UserName")}</label>
                <input
                    required={true}
                    type="text"
                    autoComplete="off"
                    className="username"
                    placeholder={t("LP_data_UserName")}
                    onChange={(e) => onchangeuser(e.target.value)}
                    value={user}
                    style={{ borderBottomColor: Error ? "red" : "#333333" }}
                />

                <label className="passwd-label">{t("LP_lbl_Password")}</label>
                <input
                    required={true}
                    type="password"
                    autoComplete="off"
                    className="passwd"
                    placeholder={t("LP_data_Password")}
                    onChange={(e) => onchangepass(e.target.value)}
                    value={pwd}
                    style={{ borderBottomColor: Error ? "red" : "#333333" }}
                />
                {Error && (
                    <p
                        style={{
                            color: "red",
                            textAlign: "center",
                            position: "relative",
                            marginTop: "5%",
                        }}
                    >
                        {Error}
                    </p>
                )}
                <div className="remember-me-div">
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

                <div className="login-btn-div">
                    <button className="loginBtn" onClick={() => handleSubmit()}>
                        {t("LP_Button_Login")}
                    </button>
                </div>

                {/* </form> */}
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
            <ToastContainer />
        </div>
    );
}
