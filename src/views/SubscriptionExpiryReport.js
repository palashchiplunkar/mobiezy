import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Header from "../components/header";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import API from "../services/API";

import "../css/SubReport.css";
import "../css/global.css";

export default function SubscriptionExpiryReport() {
  // const [showItems, setshowItems] = useState([]);
  // const [dateResponse, setdateResponse] = useState(null);
  const [phone, setPhone] = useState("");
  const [expiryResponse, setexpiryResponse] = useState(null);
  const [alert, setalert] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  // const [isDateLoading, setisDateLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );

  let agentData = {
    agent_id: user.agentId,
    operator_id: user.operatorId,
  };

  const dialer = () => {
    window.location.href = "tel:" + phone;
  };

  useEffect(() => {
    setisLoading(true);

    API.subscriptionExpiryReportAPI(agentData)

      .then((response) => {
        setexpiryResponse(response.data);
        setisLoading(false);
      })

      .catch((e) => {
        setisLoading(false);
        console.log(e);
      });
  }, []);

  const ExpiryCount = ({ date }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [countData, setCountData] = useState(null);

    useEffect(() => {
      let isMounted = true;
      setIsLoading(true);

      // Change the format of date to YYYY-MM-DD
      let dateArray = date.split("-");
      let newDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];

      let expiryData = {
        agent_id: user.agentId,
        operator_id: user.operatorId,
        pre_end_date: newDate,
      };

      API.subscriptionExpiryReportCountAPI(expiryData)
        .then((response) => {
          if (isMounted) {
            setCountData(response.data);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        });

      return () => {
        isMounted = false;
      };
    }, [date]);

    useEffect(() => {
      window.history.pushState({}, "");
      window.addEventListener("popstate", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("popstate");
    });
    },[]);

    return (
      <table className="expiryCountTable">
        <tr className="borderExpiryHead">
          <th>Customer Id</th>
          <th>Customer Name</th>
          <th>Phone No</th>
        </tr>
        {isLoading && (
          <div className="smallLoader">
            <Spinner animation="border" variant="info" />
          </div>
        )}
        {countData &&
          countData.c_report.map((report) => {
            return (
              <tr>
                <td>{report.CUSTOMER_ID}</td>
                <td style={{ fontWeight: 700 }}>{report.NAME}</td>
                <td
                  style={{
                    color: "#0090DA",
                    textDecorationLine: "underline",
                    fontWeight: 700,
                  }}
                  onClick={() => {
                    setPhone(report.PHONE);
                    setalert(true);
                  }}
                >
                  {report.PHONE}
                </td>
              </tr>
            );
          })}
      </table>
    );
  };

  const subExpiryList = () => {
    const handleItemClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const SubExpiryDataList = expiryResponse.stb_report.map((data, index) => {
      return (
        <React.Fragment key={index}>
          <div className="expiry-report-data-div">
            <div className="expiry-report-data">
              <p className="expiry-report-data-label">{data.DAYS}</p>
            </div>
            <div className="expiry-report-data">
              <p className="expiry-report-data-label">{data.PRE_END_DATE}</p>
            </div>
            <div className="expiry-report-data">
              <p
                className="expiry-report-data-label"
                style={{
                  width: "10px",
                  color: "#0090DA",
                  borderBottom: "2px solid #0090DA",
                  paddingBottom: "2px",
                  fontWeight: 700,
                }}
                onClick={() => handleItemClick(index)}
              >
                {data.COUNT}
              </p>
            </div>
          </div>
          {openIndex === index && <ExpiryCount date={data.PRE_END_DATE} />}
        </React.Fragment>
      );
    });

    return SubExpiryDataList;
  };

  const headerprops = {
    text: "Subscription Expiry Report",
    height: "10vh",
  };

  return (
    <>
    <Header name={"Subscription Expiry Report"}/>
    <div className="container-expiry-report">

      <div className="expiry-data-container">
        <div className="expiry-report-head-div">
          <div className="expiry-report-head">
            <p className="expiry-report-head-label">Days Away</p>
          </div>
          <div className="expiry-report-head">
            <p className="expiry-report-head-label">Expiry Date</p>
          </div>
          <div className="expiry-report-head">
            <p className="expiry-report-head-label">Count</p>
          </div>
        </div>
      </div>

      <div className="expiry-data">
        {isLoading && (
          <div>
            <Spinner
              animation="border"
              variant="info"
              style={{ marginTop: "50px" }}
            />
          </div>
        )}
        {expiryResponse && subExpiryList()}
      </div>
      <div className="float-div-expiry">
        <button className="float-btn">PRINT REPORT</button>
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
          What do you want to do?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Noto Sans",
              background: "var(--primay-app-color)",
              color: "white",
              border: "none",
              borderRadius: "20px",
              margin: "15px",
              padding: "10px",
            }}
          >
            Go to Renewal Page
          </DialogContentText>

          <DialogContentText
            id="alert-dialog-description"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Noto Sans",
              color: "black",
              border: "solid black 1px",
              borderRadius: "20px",
              margin: "15px",
              padding: "10px",
            }}
            onClick={dialer}
          >
            Call the Customer
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </>
  );
}
