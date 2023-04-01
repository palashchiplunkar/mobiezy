import React from "react";
import "../css/EditCustomer.css";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/API";

export default function EditCustomer() {
  const header = {
    text: "Edit Customer",
    height: "10vh",
  };
  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );
  const [dropDownAreaData, setDropDownAreaData] = useState([]);
  const location = useLocation();
  const [customer, setCustomer] = useState(location.state);
  const [customerName, setCustomerName] = useState(customer.customerName);
  const [customerPhone, setCustomerPhone] = useState(customer.phone);
  const [customerAddress, setCustomerAddress] = useState(customer.address);
  const [customerArea, setCustomerArea] = useState(customer.area);

  console.log(customer);
  useEffect(() => {
    // fetchCustomerData();
    API.dropdownAgentDataAPI({ operatorId: user.operatorId })
      .then((response) => {
        setDropDownAreaData(response.data.all_areas);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  const DropDownArea = () => {
    const DropDownAreaData = dropDownAreaData.map((data) => {
      return <option value={data.id}>{data.area_name}</option>;
    });
    return DropDownAreaData;
  };

  return (
    <>
      <Header name={"Edit Customer"} link={"/collectPayment"} />
      <div className="edit-customer-container">
        <div className="edit-customer-form">
          <div className="edit-customer-form-row">
            <div className="edit-customer-form-label">Customer Name</div>
            <input
              className="edit-customer-form-input"
              type="text"
              placeholder="Enter the Customer "
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="edit-customer-form-row">
            <div className="edit-customer-form-label">
              Customer Phone Number
            </div>
            <input
              className="edit-customer-form-input"
              type="text"
              placeholder="Enter Customer PhNO"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </div>
          <div className="edit-customer-form-row">
            <div className="edit-customer-form-label">Customer Address</div>
            <input
              className="edit-customer-form-input"
              type="text"
              placeholder="Enter Customer Address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </div>
          <div className="edit-customer-form-row">
            <div className="edit-customer-form-label">Customer Area</div>
            <select
              className="edit-customer-form-input"
              name="area"
              id="area"
              //   value={customerArea}
              onChange={(e) => setCustomerArea(e.target.value)}
            >
              <DropDownArea />
            </select>
          </div>
          <button className="edit-customer-button">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
