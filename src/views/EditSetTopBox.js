import React from "react";
import Header from "../components/header";
import "../css/EditSetTopBox.css";
export default function EditSetTopBox() {
  const headerprops = {
    text: "Edit SetTop Box",
    height: "10vh",
  };
  return (
    <>
      <Header name={"Edit SetTop Box"} />
      <div className="edit-settopbox-container">
        <div className="edit-settopbox-form">
          <div className="edit-settopbox-form-row">
            <div className="three-settopbox">
              <div className="edit-settopbox-form-label">STB Number</div>
              <input
                className="edit-settopbox-form-input"
                type="text"
                placeholder="Enter the Customer "
                value="1513C5644490054018"
              />
            </div>
            <img
              className="edit-settopbox-form-input-icon"
              src={require("../assets/barcodeicon.png")}
              style={{ width: "70px", height: "40px" }}
              alt="barcode"
            />
          </div>
          <div className="edit-settopbox-form-row">
            <div className="three-settopbox">
              <div className="edit-settopbox-form-label">VC Number</div>
              <input
                className="edit-settopbox-form-input"
                type="text"
                placeholder="Enter the Customer "
                value="001769135078"
              />
            </div>
            <img
              className="edit-settopbox-form-input-icon"
              src={require("../assets/barcodeicon.png")}
              style={{ width: "70px", height: "40px" }}
              alt="barcode"
            />
          </div>
          <div className="edit-settopbox-form-row">
            <div className="three-settopbox">
              <div className="edit-settopbox-form-label">End Date</div>
              <input
                className="edit-settopbox-form-input"
                type="date"
                placeholder="Enter the Date "
                value="30-03-2023"
              />
            </div>
          </div>
          <div className="edit-settopbox-form-row">
            <div className="three-settopbox">
              <div className="edit-settopbox-form-label">Balance</div>
              <input
                className="edit-settopbox-form-input"
                type="text"
                placeholder="Enter the Balance "
                value="202"
              />
            </div>
          </div>
          <div className="edit-settopbox-form-row">
            <div className="three-settopbox">
              <div className="edit-settopbox-form-label">Status</div>

              <select
                className="edit-settopbox-form-input"
                name="status"
                id="status"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="Temporarily Inactive">
                  Temporarily Disabled
                </option>
              </select>
            </div>
          </div>
          <button className="edit-settopbox-form-button">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
