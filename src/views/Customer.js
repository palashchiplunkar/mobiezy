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
    };
    const UnpaidhandleSwitch = () => {
        setIsUnPaidChecked(!isUnPaidChecked);
    };
    const AllhandleSwitch = () => {
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
            <Drawer isVisible={isVisible} onClose={onClose}>
                <p className="DrawerTitle">Sort Options</p>
                <div sty>
                    <div className="SortOptionsContent">
                        <p className="SortOptionsLabel">Active Paid Customer</p>
                        <PaidSwitchComponent />
                    </div>
                    <div className="SortOptionsContent">
                        <p className="SortOptionsLabel">
                            Active Unpaid Customer
                        </p>
                        <UnPaidSwitchComponent />
                    </div>
                    <div className="SortOptionsContent">
                        <p className="SortOptionsLabel">All Customers</p>
                        <AllSwitchComponent />
                    </div>
                </div>
                <p className="DrawerTitle">Sort By</p>
            </Drawer>
            <Navbar value={1} />

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
                    
                </div>
            </div>
        </div>
    );
}
