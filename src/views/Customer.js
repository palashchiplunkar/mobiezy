import React from "react";
import { RiSortDesc } from "react-icons/ri";
import Navbar from "../components/navbar";
import "../css/Customer.css";
import { useState } from "react";
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";

export default function Customer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaidChecked, setIsPaidChecked] = useState(false);
  const [isUnPaidChecked, setIsUnPaidChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const PaidhandleSwitch = () => {
    setIsPaidChecked(!isPaidChecked);
    setIsUnPaidChecked(false);
    setIsAllChecked(false);
  };
  const UnpaidhandleSwitch = () => {
    setIsPaidChecked(false);
    setIsUnPaidChecked(!isUnPaidChecked);
    setIsAllChecked(false);
  };
  const AllhandleSwitch = () => {
    setIsPaidChecked(false);
    setIsUnPaidChecked(false);
    setIsAllChecked(!isAllChecked);
  };
  const PaidSwitchComponent = () => {
    return (
      <Switch
        checked={isPaidChecked}
        onChange={() => PaidhandleSwitch()}
        offColor={"#757575"}
        onColor={"#007ABC"}
        uncheckedIcon={<div className="Switch-unchecked">OFF</div>}
        checkedIcon={<div className="Switch-checked">ON</div>}
      />
    );
  };
  const UnPaidSwitchComponent = () => {
    return (
      <Switch
        checked={isUnPaidChecked}
        onChange={() => UnpaidhandleSwitch()}
        offColor={"#757575"}
        onColor={"#007ABC"}
        uncheckedIcon={<div className="Switch-unchecked">OFF</div>}
        checkedIcon={<div className="Switch-checked">ON</div>}
      />
    );
  };
  const AllSwitchComponent = () => {
    return (
      <Switch
        checked={isAllChecked}
        onChange={() => AllhandleSwitch()}
        offColor={"#757575"}
        onColor={"#007ABC"}
        uncheckedIcon={<div className="Switch-unchecked">OFF</div>}
        checkedIcon={<div className="Switch-checked">ON</div>}
      />
    );
  };
  return (
    <>
      <div className="container">
        <img className="home-bg-img" src={require("../assets/BG.JPG")} />
        <div className="header-blue">
          <div className="area-div">
            <p className="area-p">Area</p>
            <select
              name="test"
              className="area-dropdown"
              placeholder="All Areas"
            >
              <option>All Areas</option>
              <option value="bangalore">Bangalore</option>
              <option value="mangalore">Mangalore</option>
            </select>
          </div>

          <div className="filter-div">
            <p className="filter-p">Filter</p>
            <div className="filter-button" onClick={() => openDrawer()}>
              <RiSortDesc className="filter-icon" />
            </div>
          </div>
        </div>

        <Drawer
          isVisible={isVisible}
          onClose={onClose}
          className={"drawer"}
          hideScrollbars={"true"}
        >
          <div style={{ padding: "10px" }}>
            <p className="DrawerTitle">Sort Options</p>
            <div sty>
              <div className="SortOptionsContent">
                <p className="SortOptionsLabel">Active Paid Customer</p>
                <PaidSwitchComponent />
              </div>
              <div className="SortOptionsContent">
                <p className="SortOptionsLabel">Active Unpaid Customer</p>
                <UnPaidSwitchComponent />
              </div>
              <div className="SortOptionsContent">
                <p className="SortOptionsLabel">All Customers</p>
                <AllSwitchComponent />
              </div>
            </div>
            <p className="DrawerTitle">Sort By</p>
            <div className="DrawerSortColumn">
              <div>
                <input
                  type={"radio"}
                  name={"lang"}
                  value={"English"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  onChange={
                    (e) => console.log(e)
                    //setLanguage(Languages[e.target.value])
                  }
                />
                <label className="DrawerRadioLabel">Pending amount</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name={"lang"}
                  value={"English"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  onChange={
                    (e) => console.log(e)
                    //setLanguage(Languages[e.target.value])
                  }
                />
                <label className="DrawerRadioLabel">Customer Id</label>
              </div>
            </div>
            <p className="DrawerTitle" style={{ marginTop: "20px" }}>
              Sort Type
            </p>
            <div className="DrawerSortColumn">
              <div>
                <input
                  type={"radio"}
                  name={"lang"}
                  value={"English"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  onChange={
                    (e) => console.log(e)
                    //setLanguage(Languages[e.target.value])
                  }
                />
                <label className="DrawerRadioLabel">Ascending</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name={"lang"}
                  value={"English"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  onChange={
                    (e) => console.log(e)
                    //setLanguage(Languages[e.target.value])
                  }
                />
                <label className="DrawerRadioLabel">Descending</label>
              </div>
            </div>
            <button
              className="DrawerSubmitButton"
              onClick={() => setIsVisible(false)}
            >
              <span>SUBMIT</span>
            </button>
          </div>
        </Drawer>

        <div className="card-div">
          <div className="card-group1-div">
            <div class="card-line1-div">
              <p className="card-name-p">Raghavendra Ganiga</p>
              <p className="card-price-p">₹ -15</p>
            </div>

            <div className="card-line2-div">
              <p className="card-date-p">21/03/2023</p>
              <p className="card-reg-p">KS00567</p>
            </div>

            <div className="card-line3-div">
              <p className="card-phone-p">9886522612</p>
              <p className="card-status-p">Acitve</p>
            </div>
          </div>

          <div className="card-group2-div">
            <div className="card-underline-div"></div>
            <p className="card-address-p">
              3rd Floor, #280, SLV Arcade Kathriguppe Circle, Outer Ring Rd,
              Banashankari 3rd Stage, Bengaluru, Karnataka 560085
            </p>
          </div>
        </div>
      </div>
      <Navbar value={1} />
    </>
  );
}
