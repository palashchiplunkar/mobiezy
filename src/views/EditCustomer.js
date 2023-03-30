import React from "react";
import "../css/EditCustomer.css";
import Header from "../components/header";

export default function EditCustomer() {
  const header = {
    text: "Edit Customer",
    height: "10vh",
  };

  return (
    <div className="edit-customer-container">
      <Header {...header} />
      <div className="edit-customer-form">
        <div className="edit-customer-form-row">
          <div className="edit-customer-form-label">Customer Name</div>
          <input
            className="edit-customer-form-input"
            type="text"
            placeholder="Enter the Customer "
            value="Nikith"
          />
        </div>
        <div className="edit-customer-form-row">
          <div className="edit-customer-form-label">Customer Phone Number</div>
          <input
            className="edit-customer-form-input"
            type="text"
            placeholder="Enter Customer PhNO"
            value="9886522612"
          />
        </div>
        <div className="edit-customer-form-row">
          <div className="edit-customer-form-label">Customer Address</div>
          <input
            className="edit-customer-form-input"
            type="text"
            placeholder="Enter Customer Address"
            value="Ittamadu, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085"
          />
        </div>
        <div className="edit-customer-form-row">
          <div className="edit-customer-form-label">Customer Area</div>
          <select className="edit-customer-form-input" name="area" id="area">
            <option value="Banashankari">Banashankari</option>
            <option value="Jayanagar">Jayanagar</option>
            <option value="Koramangala">Koramangala</option>
          </select>
        </div>
        <button className="edit-customer-button">SUBMIT</button>
      </div>
    </div>
  );
}
