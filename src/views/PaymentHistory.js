import React, { useEffect, useState } from "react";
import { TfiMobile } from "react-icons/tfi";
import { Spinner } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import "../css/PaymentHistory.css";
import "../css/STBHistory.css";
import API from "../services/API";

export default function PaymentHistory() {
  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [paymentOpen, setpaymentOpen] = useState(true);
  const [stbOpen, setstbOpen] = useState(false);
  const data = [
    {
      stbNo: "1513C5644490054018",
      vcNo: "001769135078",
      dateTime: "03:45 PM  21-03-2023",
      status: "Active",
    },

    {
      stbNo: "1513C5644490054807",
      vcNo: "001769135087",
      dateTime: "02:38 PM  22-12-2022",
      status: "Suspended",
    },

    {
      stbNo: "1513C5644490054018",
      vcNo: "001769135078",
      dateTime: "06:55 PM  14-02-2021",
      status: "Cancelled",
    },
    {
      stbNo: "1513C5644490054018",
      vcNo: "001769135078",
      dateTime: "06:55 PM  14-02-2021",
      status: "Cancelled",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setError("");
    const bodyPayment = {
      customer_id: "1001592649",
      operator_id: user.operatorId,
    };
    const bodyStb = {
        customer_id: "1001592649",
        operator_id: user.operatorId,
        flag:"Y"
      };

    API.lastPaymentHistory(bodyPayment)
      .then((response) => {
        if (response.data.customerDetailsList.length > 0) {
          setPaymentHistory(response.data.customerDetailsList);
          setIsLoading(false);
          setError("");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError("Some Error has occured");
      });

      
  }, []);

  return (
    <>
      <Header name={paymentOpen ? "Payment History" : "STB History"} />
      <div>
        <div
          className="StaticDiv"
          style={{ height: stbOpen ? "30vh" : "30vh" }}
        >
          <div className="customer-card-div-history">
            <div
              className="card-div-history"
              onClick={() => navigate("/collectPayment")}
            >
              <div className="card-group1-div">
                <div class="card-line1-div">
                  <p className="card-name-p">
                    Name : Nikhith Gowda Subrahmanya
                  </p>
                </div>

                <div className="card-line2-div">
                  <p className="card-date-p" style={{ fontWeight: "700" }}>
                    Customer ID : JB0213
                  </p>
                </div>

                <div className="card-line3-div">
                  <div style={{ display: "flex" }}>
                    <TfiMobile className="card-mobileIcon" />
                    <p className="card-phone-p">9740769579</p>
                  </div>

                  <p
                    className="card-status-p"
                    style={{
                      backgroundColor: "Active"
                        ? "#a0c334"
                        : "Temporarily Disconnected"
                        ? "#DC1515"
                        : "#000000",
                    }}
                  >
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hty-btn-hzl">
            <button
              className="his-btn"
              onClick={() => {
                setpaymentOpen(!paymentOpen);
                setstbOpen(false);
              }}
            >
              PAYMENT HISTORY
            </button>
            <button
              className="his-btn"
              onClick={() => {
                setstbOpen(!stbOpen);
                setpaymentOpen(false);
              }}
            >
              STB HISTORY
            </button>
          </div>
        </div>
      </div>

      {paymentOpen && (
        <div className="ScrollingContainerParent">
          <button className="his-btn" style={{ width: "80%" }}>
            PRINT TRANSACTION HISTORY
          </button>
          <div className="ScrollingContainer">
            <div style={{ display: "flex", justifyContent: "center" }}>
              {isLoading && (
                <Spinner
                  animation="border"
                  variant="info"
                  style={{ position: "absolute", marginTop: "50vw" }}
                />
              )}
              {Error && <p style={{ marginTop: "100px" }}>{Error}</p>}
            </div>

            {PaymentHistory.map((value) => {
              return (
                <div style={{ width: "100%" }}>
                  <div className="customer-card-div-history-below">
                    <div className="history-map-div1">
                      <p className="card-date-p" style={{ fontWeight: "700" }}>
                        {value.TRAN_ID}
                      </p>
                      <p
                        className="card-date-p"
                        style={{ color: "#DC1515", fontWeight: "bold" }}
                      >
                        ₹{value.BALANCE}
                      </p>
                    </div>
                    <div className="history-map-div1">
                      <p className="card-date-p">{value.TRAN_TYPE}</p>
                      <p className="card-date-p">
                        {value.COLLECTION_DATE.slice("11", "16")}{" "}
                        {value.COLLECTION_DATE.slice("11", "12") >= 12
                          ? "PM"
                          : "AM"}{" "}
                        {value.COLLECTION_DATE.slice("0", "10")}
                      </p>
                    </div>
                    <div className="history-map-div1">
                      <p className="card-date-p">
                        {value.MODE_OF_PAYMENT == 1 ? "Online Payment" : "Cash"}
                      </p>
                      <p
                        className="card-date-p"
                        style={{ color: "#3AA45E", fontWeight: "bold" }}
                      >
                        ₹{value.COLLECTED_AMOUNT}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {stbOpen && (
        <div className="ScrollingContainerParent" style={{ height: "55vh" }}>
          {data.map((val) => {
            return (
              <div className="ScrollingContainer">
                <div
                  style={{ width: "100%" }}
                  className="customer-card-div-history"
                >
                  <div
                    className="card-div-history"
                    onClick={() => navigate("/collectPayment")}
                  >
                    <div className="card-group1-div">
                      <div class="card-line1-div">
                        <p className="card-name-p">Nikhith Gowda Subrahmanya</p>
                      </div>

                      <div className="card-line2-div">
                        <p
                          className="card-date-p"
                          style={{ fontWeight: "700" }}
                        >
                          001769135078{" "}
                        </p>
                      </div>

                      <div className="card-line3-div">
                        <div style={{ display: "flex" }}>
                          <p className="card-date-p">03:45 PM 21-03-2023</p>
                        </div>

                        <p
                          className="card-status-p"
                          style={{
                            backgroundColor: "Active"
                              ? "#a0c334"
                              : "Temporarily Disconnected"
                              ? "#DC1515"
                              : "#000000",
                          }}
                        >
                          Active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
