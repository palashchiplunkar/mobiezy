import React, { useEffect, useState } from "react";
import { TfiMobile } from "react-icons/tfi";
import { Spinner } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import "../css/PaymentHistory.css";
import "../css/STBHistory.css";
import API from "../services/API";

export default function PaymentHistory() {
    const customer= useLocation();


  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const [PaymentHistory, setPaymentHistory] = useState([]);
  const [StbHistory, setStbHistory] = useState([]);
  const [paymentOpen, setpaymentOpen] = useState(true);
  const [stbOpen, setstbOpen] = useState(false);
    const [customerDetails, setcustomerDetails] = useState(customer.state)

  useEffect(() => {
    setIsLoading(true);
    setError("");
    const bodyPayment = {
      customer_id: customerDetails.customerId,
      operator_id: user.operatorId,
    };
    const bodyStb = {
      cust_num: customerDetails.customerId,
      operator_id: JSON.stringify(user.operatorId),
      flag: "Y",
    };

    API.lastPaymentHistory(bodyPayment)
      .then((response) => {
        if (response.data.customerDetailsList.length > 0) {
          setPaymentHistory(response.data.customerDetailsList);
          setIsLoading(false);
          setError("");
        }else{
            setIsLoading(false);
            setError("No Details Found");

        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError("Some Error has occured");
      });
    API.STBHistory(bodyStb)
      .then((response) => {
        if (response.data.stb_history.length > 0) {
          setStbHistory(response.data.stb_history);
          setError("");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Some Error has Occured");
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
                    {customerDetails ? customerDetails.customerName :"--"}
                  </p>
                </div>

                <div className="card-line2-div">
                  <p className="card-date-p" style={{ fontWeight: "700" }}>
                  {customerDetails ? customerDetails.customerId :"--"}
                  </p>
                </div>

                <div className="card-line3-div">
                  <div style={{ display: "flex" }}>
                    <TfiMobile className="card-mobileIcon" />
                    <p className="card-phone-p">
                    {customerDetails ? customerDetails.phone :"--"}
                    </p>
                  </div>

                  <p
                    className="card-status-p"
                    style={{
                      backgroundColor: customerDetails.status== "Active"?
                         "#a0c334"
                        : "Temporarily Disconnected"
                        ? "#DC1515"
                        : "#000000",
                    }}
                  >
                  {customerDetails ? customerDetails.status :"--"}
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
                        {value.COLLECTION_DATE.slice("11", "13") >= 12
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
          {StbHistory.map((value) => {
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
                        <p className="card-name-p">{value.STB_NUMBER}</p>
                      </div>

                      <div className="card-line2-div">
                        <p
                          className="card-date-p"
                          style={{ fontWeight: "700" }}
                        >
                          {value.VC_NUMBER}{" "}
                        </p>
                      </div>

                      <div className="card-line3-div">
                        <div style={{ display: "flex" }}>
                          <p className="card-date-p">
                            {value.UPD_TIMESTAMP.slice("11", "16")}{" "}
                            {value.UPD_TIMESTAMP.slice("11", "13") >= 12
                              ? "PM "
                              : "AM "}
                            {value.UPD_TIMESTAMP.slice("0", "10")}
                          </p>
                        </div>

                        <p
                          className="card-status-p"
                          style={{
                            backgroundColor: value.STATUS == "Active"
                              ? "#a0c334"
                              : "Temporarily Disconnected"
                              ? "#DC1515"
                              : "#000000",
                          }}
                        >
                          {value.STATUS}
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
