import { useState, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import "../css/HamNav.css";
import { useNavigate } from "react-router-dom";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const toggleNavbar = () => setOpen(!open);
    const navigate = useNavigate();
    const handleLanguageBar = () => {
        navigate("/select");
        toggleNavbar();
    };

    let navRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!navRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.addEventListener("mousedown", handler);
        };
    });

    return (
        <>
            <BiMenu
                style={{ color: "white", width: "40px", height: "30px" }}
                onClick={toggleNavbar}
            />
            <div className={open ? "inactive" : "active"} ref={navRef}>
                <div className="ham-drawer__header">
                    <div className="ham-drawer__space"></div>
                    <div className="ham-drawer_user_details">
                        <img
                            src={require("../assets/profile.jpg")}
                            className="ham-drawer__profile_img"
                        />
                        <p className="ham-drawer__user_name">Dinesh Kumar</p>

                        <p className="ham-drawer__user_email">
                            dinesh.vitla@mobiezy.com
                        </p>
                        <p className="ham-drawer__user_phone">
                            +91 9999 886644
                        </p>
                    </div>
                </div>
                <div className="ham-drawer__body">
                    <div
                        className="ham-drawer__body__item"
                        onClick={toggleNavbar}
                    >
                        <p className="ham-drawer__body__item__text">Home</p>
                        <img
                            src={require("../assets/side_arrow.png")}
                            className="ham-drawer__body__item__arrow"
                        />
                    </div>
                    <div
                        className="ham-drawer__body__item"
                        onClick={handleLanguageBar}
                    >
                        <p className="ham-drawer__body__item__text">
                            Language Preference
                        </p>
                        <img
                            src={require("../assets/side_arrow.png")}
                            className="ham-drawer__body__item__arrow"
                        />
                    </div>
                    <div className="ham-drawer__body__item">
                        <p className="ham-drawer__body__item__text">Logout</p>
                        <img
                            src={require("../assets/side_arrow.png")}
                            className="ham-drawer__body__item__arrow"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default MobileNavigation;
