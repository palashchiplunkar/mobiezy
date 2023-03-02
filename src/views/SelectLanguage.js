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
export default function SelectLanguage() {
    return (
        <div>
            <img className="bg-img" src={require("../assets/BG.JPG")} />
            <div className="HomeHeader">
                <FaAngleLeft
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
                                className="RadioButtons"
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
                            />
                            <label className="RadioLabel">தமிழ்</label>
                        </div>
                    </div>
                    <div className="LanguageColumn">
                        <div>
                            <input
                                type={"radio"}
                                name={"lang"}
                                value={"हिन्दी"}
                                className="RadioButtons"
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
