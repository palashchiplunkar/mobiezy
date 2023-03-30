import React from "react";
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
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../css/alert_popup.css";
import "reactjs-popup/dist/index.css";
import "../css/SelectLanguage.css";

export default function SelectLanguage() {
  const [alert, setalert] = useState(false);
  const Languages = {
    English: {
      heading: "Greetings!",
      message: "Welcome to the family of 5000+ Cable & Internet Operators",
    },

    Hindi: {
      heading: "नमस्ते ,",
      message: "5000+ केबल और इंटरनेट ऑपरेटरों के परिवार में आपका स्वागत है",
    },
  };

  const [language, setLanguage] = useState({
    heading: "Greetings!",
    message: "Welcome to the family of 5000+ Cable & Internet Operators",
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    // Get Value of Checked Radio Button using querySelectors
    const checkedRadio = document.querySelector(
      'input[name="lang"]:checked'
    ).value;

    if (checkedRadio === "English") {
      i18next.changeLanguage("en_US");
    }

    if (checkedRadio === "Hindi") {
      i18next.changeLanguage("hi_IN");
    }
  };

  const handleAlertOpen = () => {
    handleLanguageChange();
    setalert(false);
  };

  // Get Cookie

  const localstorageValue = localStorage.getItem("i18nextLng") || "en_US";

  useEffect(() => {
    window.onpopstate = (e) => {};
  });

  useEffect(() => {
    if (localstorageValue === "en_US") {
      document.getElementById("English").checked = true;
    }

    if (localstorageValue === "hi_IN") {
      document.getElementById("Hindi").checked = true;
    }
  }, []);

  return (
    <div>
      <div className="HomeHeader">
        <FaAngleLeft
          onClick={() => navigate("/home")}
          style={{
            color: "white",
            height: "25px",
            marginLeft: "20px",
          }}
        />
        <p className="HeaderLabel">{t("LS_lbl_Settings")}</p>
      </div>

      {/* Preview Window */}

      <div>
        <p className="PreviewLabel">{t("LS_lbl_Preview")}</p>
        <div className="PreviewBackground">
          <div className="StatusBar">
            <p className="Time">9:41</p>
            <MdSignalCellularAlt
              style={{ position: "relative", left: "78%" }}
            />
            <AiOutlineWifi style={{ position: "relative", left: "80%" }} />
            <BsBatteryFull style={{ position: "relative", left: "82%" }} />
          </div>

          <div className="SearchBar">
            <BiMenu style={{ marginLeft: "5%" }} />
            <AiOutlineSearch style={{ position: "relative", left: "70%" }} />
            <FaBell style={{ position: "relative", left: "75%" }} />
          </div>

          <div className="GreetingBox">
            <p className="GreetingsLabel">{language.heading}</p>
            <p className="GreetingsPara">{language.message}</p>
          </div>
        </div>

        <p className="SelectLangLabel">{t("LS_lbl_Select_Lang")}</p>

        <div className="LanguageGroup">
          <div className="LanguageColumn">
            <div>
              <input
                type={"radio"}
                name={"lang"}
                value={"English"}
                id={"English"}
                className="RadioButtons"
                onChange={(e) => setLanguage(Languages[e.target.value])}
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
                value={"Hindi"}
                id={"Hindi"}
                className="RadioButtons"
                onChange={(e) => setLanguage(Languages[e.target.value])}
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
          <p className="BottomMessage">{t("LS_message_desc")}</p>
        </div>

        <button className="SubmitButton" onClick={() => setalert(true)}>
          <span>{t("LS_button_SUBMIT")}</span>
        </button>
      </div>

      <Dialog
        open={alert}
        onClose={() => setalert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontFamily: "Noto Sans" }}
        >
          Change Language
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontFamily: "Noto Sans" }}
          >
            Do you want to Save the changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertOpen} style={{ fontFamily: "Noto Sans" }}>
            Yes
          </Button>
          <Button
            onClick={() => setalert(false)}
            autoFocus
            style={{ fontFamily: "Noto Sans" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
