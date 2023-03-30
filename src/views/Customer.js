import React, { useEffect } from "react";
import { RiSortDesc } from "react-icons/ri";
import Navbar from "../components/navbar";
import { useState } from "react";
import Drawer from "react-bottom-drawer";
import { TfiMobile } from "react-icons/tfi";
import { useNavigate } from "react-router";
import API from "../services/API";
import "../css/Customer.css";
import "../css/global.css";

export default function Customer() {
    const [isVisible, setIsVisible] = useState(false);
    const [dropDownAreaData, setDropDownAreaData] = useState([]);

    const navigate = useNavigate();
    const user = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user")
    );

    const CustomerData = [
        {
            id: "KS00567",
            name: "Raghavendra Ganiga",
            date: "21/03/2023",
            price: -15,
            phno: "9886522612",
            status: "Active",
            address:
                "3rd Floor, #280, SLV Arcade Kathriguppe Circle, Outer Ring Rd, Banashankari 3rd Stage, Bengaluru, Karnataka 560085",
        },
        {
            id: "JB0213",
            name: "Akshay Vaidya",
            date: "21/02/2023",
            price: 275,
            phno: "9740769579",
            status: "Temporarily Disconnected",
            address: "",
        },
        {
            id: "BG70279",
            name: "Dinesh Kumar",
            date: "03/02/2022",
            price: 25,
            phno: "9886522612",
            status: "Permanently Disconnected",
            address:
                "No.153, Bannerghatta Main Rd, Vijayashri Layout, Bengaluru, Karnataka 560076",
        },
    ];

    useEffect(() => {
        window.history.pushState({}, "");
        window.addEventListener("popstate", function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.history.pushState({}, "");
        });

        try{
            API.dropdownAgentDataAPI({ operatorId: user.operatorId })
            .then(
                (response) => {
                setDropDownAreaData(response.data.all_areas);
            });
        }

        catch(error){
            console.log(error);
        }
    }, []);

    const DropDownArea = () => {
        const DropDownAreaData = dropDownAreaData.map((data) => {
            return <option value={data.area_id}>{data.area_name}</option>;
        });
        return DropDownAreaData;
    };
    
    const Customers = () => {
        const eachCustomer = CustomerData.map((customer) => {
            return (
                <div
                    className="card-div"
                    onClick={() => navigate("/collectPayment")}
                >
                    <div className="card-group1-div">
                        <div class="card-line1-div">
                            <p className="card-name-p">{customer.name}</p>
                            <p
                                className="card-price-p"
                                style={{
                                    color:
                                        customer.price >= 0
                                            ? "#DC1515"
                                            : "#a0c334",
                                }}
                            >
                                ₹ {customer.price}
                            </p>
                        </div>

                        <div className="card-line2-div">
                            <p className="card-date-p">{customer.date}</p>
                            <p className="card-reg-p">{customer.id}</p>
                        </div>

                        <div className="card-line3-div">
                            <div style={{ display: "flex" }}>
                                <TfiMobile className="card-mobileIcon" />
                                <p className="card-phone-p">{customer.phno}</p>
                            </div>

                            <p
                                className="card-status-p"
                                style={{
                                    backgroundColor:
                                        customer.status === "Active"
                                            ? "#a0c334"
                                            : customer.status ===
                                              "Temporarily Disconnected"
                                            ? "#DC1515"
                                            : "#000000",
                                }}
                            >
                                {customer.status}
                            </p>
                        </div>
                    </div>
                    {customer.address ? (
                        <div className="card-group2-div">
                            <div className="card-underline-div"></div>
                            <p className="card-address-p">{customer.address}</p>
                        </div>
                    ) : null}
                </div>
            );
        });
        return <>{eachCustomer}</>;
    };

    const onClose = React.useCallback(() => {
        setIsVisible(false);
    }, []);

    const openDrawer = React.useCallback(() => setIsVisible(true), []);

    return (
        <>
            <div className="customer-container">
                <div className="header-blue">
                    <div className="area-div">
                        <p className="area-p">Area</p>
                        <input
                            type={"text"}
                            placeholder="Search"
                            className="area-dropdown"
                            style={{
                                color: "white",
                                position: "absolute",
                                top: "90%",
                            }}
                        />
                        <select
                            name="test"
                            className="area-dropdown"
                            placeholder="All Areas"
                        >
                            <option>All Areas</option>
                            <DropDownArea />
                        </select>
                    </div>

                    <div className="filter-div">
                        <p className="filter-p">Filter</p>
                        <div
                            className="filter-button"
                            onClick={() => openDrawer()}
                        >
                            <RiSortDesc className="filter-icon" />
                        </div>
                    </div>
                </div>

                <div className="customer-page-card-div">
                    <Customers />
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
                                <p className="SortOptionsLabel">
                                    Active Paid Customer
                                </p>
                                <input
                                    type={"radio"}
                                    name={"sort-option"}
                                    className="DrawerRadioButtons"
                                />
                            </div>
                            <div className="SortOptionsContent">
                                <p className="SortOptionsLabel">
                                    Active Unpaid Customer
                                </p>
                                <input
                                    type={"radio"}
                                    name={"sort-option"}
                                    className="DrawerRadioButtons"
                                />
                            </div>
                            <div className="SortOptionsContent">
                                <p className="SortOptionsLabel">
                                    All Customers
                                </p>
                                <input
                                    type={"radio"}
                                    name={"sort-option"}
                                    className="DrawerRadioButtons"
                                />
                            </div>
                        </div>
                        <p className="DrawerTitle">Sort By</p>
                        <div className="DrawerSortColumn">
                            <div>
                                <input
                                    type={"radio"}
                                    name={"sort-by"}
                                    value={"English"}
                                    id={"English"}
                                    className="DrawerRadioButtons"
                                    onChange={
                                        (e) => console.log(e)
                                        //setLanguage(Languages[e.target.value])
                                    }
                                />
                                <label className="DrawerRadioLabel">
                                    Pending amount
                                </label>
                            </div>
                            <div>
                                <input
                                    type={"radio"}
                                    name={"sort-by"}
                                    value={"English"}
                                    id={"English"}
                                    className="DrawerRadioButtons"
                                    onChange={
                                        (e) => console.log(e)
                                        //setLanguage(Languages[e.target.value])
                                    }
                                />
                                <label className="DrawerRadioLabel">
                                    Customer Id
                                </label>
                            </div>
                        </div>
                        <p
                            className="DrawerTitle"
                            style={{ marginTop: "20px" }}
                        >
                            Sort Type
                        </p>
                        <div className="DrawerSortColumn">
                            <div>
                                <input
                                    type={"radio"}
                                    name={"sort-type"}
                                    value={"English"}
                                    id={"English"}
                                    className="DrawerRadioButtons"
                                    onChange={
                                        (e) => console.log(e)
                                        //setLanguage(Languages[e.target.value])
                                    }
                                />
                                <label className="DrawerRadioLabel">
                                    Ascending
                                </label>
                            </div>
                            <div>
                                <input
                                    type={"radio"}
                                    name={"sort-type"}
                                    value={"English"}
                                    id={"English"}
                                    className="DrawerRadioButtons"
                                    onChange={
                                        (e) => console.log(e)
                                        //setLanguage(Languages[e.target.value])
                                    }
                                />
                                <label className="DrawerRadioLabel">
                                    Descending
                                </label>
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
            </div>
            <Navbar value={1} />
        </>
    );
}
