import NavLinks from "./navLinks";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import "../css/HamNav.css";
const MobileNavigation = () => {
  const [open, setOpen] = useState(true);
  const toggleNavbar = () => setOpen(!open);
  return (
    <>
      <BiMenu
        style={{ color: "white", width: "40px", height: "30px" }}
        onClick={toggleNavbar}
      />
      {open && (
        <div className="ham-drawer">
            <AiOutlineClose onClick={toggleNavbar} style={{}}/>
          <div className="ham-drawer__header">
            <div className="ham-drawer__space"></div>
            <div className="ham-drawer_user_details">
              <img
                src={require("../assets/profile.jpg")}
                className="ham-drawer__profile_img"
              />
              <p className="ham-drawer__user_name">Dinesh Kumar</p>

              <p className="ham-drawer__user_email">dinesh.vitla@mobiezy.com</p>
              <p className="ham-drawer__user_phone">+91 9999 886644</p>
            </div>
          </div>
          <div className="ham-drawer__body">
            <div className="ham-drawer__body__item">
              <p className="ham-drawer__body__item__text">Home</p>
              <img
                src={require("../assets/side_arrow.png")}
                className="ham-drawer__body__item__arrow"
              />
            </div>
            <div className="ham-drawer__body__item">
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
      )}
    </>
  );
};
export default MobileNavigation;
