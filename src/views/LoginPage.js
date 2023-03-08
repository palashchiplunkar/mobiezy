import React from "react";
import axios from "axios"
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import loginAPI from "../services/authApi";
import cookie from "js-cookie";
import "../css/LoginStyles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    useEffect(() => {
        const user = localStorage.getItem("user");
       
        if (user) {
            navigate('/home');
        }
       
       
        
    }, []);

    const handleSubmit = (e) => {
        if(user === "" || pwd === "") {
            toast.error("Please enter username and password");
            return 
        }
        loginAPI.post("cableguy2-mobile-user-login-new", {
            freshInstall: "N",
            appVersion: "2.0.63",
            device_id: "2714",
            username: user,
            password: pwd,
        })

        .then((response) => {
            console.log(response)
            if(response.data.messageText === "UNAUTHORIZED") {
                toast.error("Invalid username or password");
                navigate('/');
            }
            
            else {
                
                if(rememberMe) {
                    localStorage.setItem("user", user); 
                }
                // use async
                navigate('/home');

            }
        })

        .catch((e) => {
            console.log(e)
            alert(e.message);
        })
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
                    required="true"
                    type="text"
                    autocomplete="off"
                    className="username"
                    placeholder={t("LP_data_UserName")}
                    onChange={(e)=>setUser(e.target.value)}
                    value={user}
                />

                <label className="passwd-label">{t("LP_lbl_Password")}</label>
                <input
                    required="true"
                    type="password"
                    autocomplete="off"
                    className="passwd"
                    placeholder={t("LP_data_Password")}
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                />

                <div className="remember-me-div">
                    <input className="rmcb" type="checkbox" id="remberme"
                        onChange={(e) => setRememberMe(e.target.checked)}
                        value={rememberMe}

                    />
                    <label class="rememberme">{t("LP_lbl_Remember_Me")}</label>
                </div>

                <div className="login-btn-div">
                    <button className="loginBtn" onClick={() => handleSubmit()}>
                        {t("LP_Button_Login")}
                    </button>
                </div>
                {/* </form> */}

                <p className="version">{t("LP_lbl_Version")}</p>
               
            </div>
            <ToastContainer />  
        </div>
    );
}
