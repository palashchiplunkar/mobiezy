import React from "react";
import "../css/SelectLanguage.css";
import { FaAngleLeft } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function SelectLanguage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    // get the input value
    // Check which language is selected in the cookie
    // const i = "en";
    // // if the language is english, set the radio button to english
    // if(i==="en"){
    //     document.getElementById("English").checked=true;
    // }
    // if(i==="es"){
    //     document.getElementById("hn").checked=true;
    // }

    const handleRadioChange = (e) => {
        if (e.target.value === "English") {
            i18next.changeLanguage("en_US");
            t("en");
        }
        
        if (e.target.value === "Hindi") {
            i18next.changeLanguage("hi_IN");
            t("hi_IN");
        }
    };

    return (
        <div>
            <img className="bg-img" src={require("../assets/BG.JPG")} />
            <div className="HomeHeader">
                <FaAngleLeft
                    onClick={() => navigate("/home")}
                    style={{
                        color: "white",
                        height: "25px",
                        marginLeft: "20px",
                    }}
                />
                <p className="HeaderLabel">Language Preference</p>
            </div>
            <div>
                <p className="PreviewLabel">Preview</p>
                <div className="PreviewBackground">
                    <div className="StatusBar">
                        <p className="Time">9:41</p>
                        <MdSignalCellularAlt
                            style={{ position: "relative", left: "78%" }}
                        />
                        <AiOutlineWifi
                            style={{ position: "relative", left: "80%" }}
                        />
                        <BsBatteryFull
                            style={{ position: "relative", left: "82%" }}
                        />
                    </div>
                    <div className="SearchBar">
                        <BiMenu style={{ marginLeft: "5%" }} />
                        <AiOutlineSearch
                            style={{ position: "relative", left: "70%" }}
                        />
                        <FaBell style={{ position: "relative", left: "75%" }} />
                    </div>
                    <div className="GreetingBox">
                        <p className="GreetingsLabel">Greetings!</p>
                        <p className="GreetingsPara">
                            Welcome to the family of 5000+ Cable & Internet
                            Operators
                        </p>
                    </div>
                </div>
                <p className="SelectLangLabel">
                    Select Your Language of Preference
                </p>
                <div className="LanguageGroup">
                    <div className="LanguageColumn">
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"English"}
                                id="English"
                                className="RadioButtons"
                                onChange={handleRadioChange}
                            />
                            <label className="RadioLabel">English</label>
                        </div>

                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"ಕನ್ನಡ"}
                                className="RadioButtons"
                            />
                            <label className="RadioLabel">ಕನ್ನಡ</label>
                        </div>
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"தமிழ்"}
                                className="RadioButtons"
                                onChange={handleRadioChange}
                            />
                            <label className="RadioLabel">தமிழ்</label>
                        </div>
                    </div>
                    <div className="LanguageColumn">
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"hn"}
                                id="Hindi"
                                className="RadioButtons"
                                onChange={handleRadioChange}
                            />
                            <label className="RadioLabel">हिन्दी</label>
                        </div>
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"മലയാളം"}
                                className="RadioButtons"
                            />
                            <label className="RadioLabel">മലയാളം</label>
                        </div>
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"తెలుగు"}
                                className="RadioButtons"
                            />
                            <label className="RadioLabel">తెలుగు</label>
                        </div>
                    </div>
                </div>
                <div className="BottomMessageContainer">
                    <AiFillInfoCircle className="MDInfo" />
                    <p className="BottomMessage">
                        Language Option can be changed back at anytime, Some
                        critical information will still continue to be in
                        English.
                    </p>
                </div>
                <button className="SubmitButton">
                    <span>SUBMIT</span>
                </button>
            </div>
        </div>
    );
}
