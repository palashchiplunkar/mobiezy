import React from "react";
import "../css/header.css";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  let navigate = useNavigate();

  return (
    <div className="upper-header">
      <div style={{height:"2vh"}}>
        <FaAngleLeft
          onClick={() => {
            navigate(props.link);
          }}
          style={{
            color: "white",
            height:"3vh",
            position:"absolute",
            left:"5vw"
          }}
        />
      </div>
      <div style={{height:"2vh",position:"absolute",left:"20vw"}}>
        <h2 className="upper-header-label">{props.name}</h2>
      </div>
    </div>
  );
};

export default Header;
