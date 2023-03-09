import React from "react";
import Navbar from "../components/navbar";
import "../css/MoreOptions.css";
import {useNavigate} from "react-router-dom";
function MoreOptions() {
  const navigate = useNavigate();
  let options = [
    {
      id: 1,
      name: "Daily Report",
      imgUrl: "daily2.png",
      toLink: "",
    },
    {
      id: 2,
      name: "Monthly Report",
      imgUrl: "monthly.png",
      toLink: "/monthlyReport",
    },
    {
      id: 3,
      name: "Expiry Report",
      imgUrl: "expiry.png",
      toLink: "/subExpiryReport",
    },
    {
      id: 4,
      name: "View Complaints",
      imgUrl: "complain1.png",
      toLink: "",
    },
    {
      id: 5,
      name: "Customer Summary",
      imgUrl: "summary.png",
      toLink: "/customerStatistics",
    },
    {
      id: 6,
      name: "Area-wise Due Report ",
      imgUrl: "due.png",
      toLink: "/areaWiseReport",
    },
    {
      id: 7,
      name: "Renewal Report",
      imgUrl: "renewal.png",
      toLink: "",
    },
    {
      id: 8,
      name: "Wallet Recharge",
      imgUrl: "wallet.png",
      toLink: "",
    },
  ];
  return (
    <>
      <div>
        <img className="home-bg-img" src={require("../assets/BG.JPG")} />
        <div className="headerblue-report">
          <h2 className="report-label">More Options</h2>
        </div>
        <div className="OptionsContainer">
          {options.map((option) => {
    
            return <div className="EachOption" id={option.id} onClick={() => navigate(option.toLink)}>
                <img src={require("../assets/"+option.imgUrl)} alt={option.name} width={"45%"}/>
                <p>{option.name}</p></div>;
          })}
        </div>
      </div>
      <Navbar value={2} />
    </>
  );
}

export default MoreOptions;
