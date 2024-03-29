import React, { useEffect } from "react";
import { RiSortDesc } from "react-icons/ri";
import Navbar from "../components/navbar";
import { useState, useMemo } from "react";
import Drawer from "react-bottom-drawer";
import { TfiMobile } from "react-icons/tfi";
import { useNavigate } from "react-router";
import API from "../services/API";

import "../css/Customer.css";
import "../css/global.css";
import { changeLanguage } from "i18next";

export default function Customer() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [dropDownAreaData, setDropDownAreaData] = useState([]);
  const [customerData, setcustomerData] = useState([]);
  const [filtercustomerData, setfiltercustomerData] = useState([]);

  const [sortOptions, setSortOptions] = useState("All");
  const [sortBy, setSortBy] = useState("CustomerId");
  const [sortType, setSortType] = useState("ASC");
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("All");

  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );

  const fetchCustomerData = () => {
    API.allCustomerData({ agentId: user.agentId })
      .then((response) => {
        console.log(response.data.results);
        setcustomerData(response.data.results);
        setfiltercustomerData(response.data.results);
        handleFilterSubmit();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCustomerData();
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
  useEffect(() => {
    if (area === "All") {
      setfiltercustomerData([...customerData]); // Reset filter data to all customers
    } else {
      const results = customerData.filter(
        (customer) => customer.AREA_ID === area
      );
      setfiltercustomerData(results);
    }
  }, [area, customerData]);

  useEffect(() => {
    if (area === "All") {
      setfiltercustomerData(customerData);
    } else {
      console.log("Selected Area: ", area);
      // based the seleceted area filter the data
      const results = customerData.filter(
        (customer) => customer.AREA_ID === parseInt(area)
      );
      console.log(results);
      setfiltercustomerData(results);
    }
  }, [area]);

  useEffect(() => {
    const results = customerData.filter(
      (customer) =>
        customer.customerName?.toLowerCase().includes(search?.toLowerCase()) ||
        customer.phone?.toLowerCase().includes(search?.toLowerCase()) ||
        customer.managedCustomerId
          ?.toLowerCase()
          .includes(search?.toLowerCase()) ||
        customer.endDate?.toLowerCase().includes(search?.toLowerCase()) ||
        customer.status?.toLowerCase().includes(search?.toLowerCase()) ||
        customer.totalPayableAmount?.toString().includes(search?.toLowerCase())
    );
    setfiltercustomerData(results);
  }, [search]);

  const Customers = () => {
    const eachCustomer = filtercustomerData.map((customer) => {
      return (
        <div
          className="card-div"
          onClick={() =>
            navigate("/customer/collectPayment", {
              state: customer,
            })
          }
        >
          <div className="card-group1-div">
            <div class="card-line1-div">
              <p className="card-name-p">{customer.customerName}</p>
              <p
                className="card-price-p"
                style={{
                  color:
                    customer.totalPayableAmount > 0 ? "#DC1515" : "#a0c334",
                }}
              >
                ₹ {customer.totalPayableAmount}
              </p>
            </div>

            <div className="card-line2-div">
              <p className="card-date-p">{customer.endDate}</p>
              <p className="card-reg-p">{customer.managedCustomerId}</p>
            </div>

            <div className="card-line3-div">
              <div style={{ display: "flex" }}>
                <TfiMobile className="card-mobileIcon" />
                <p className="card-phone-p">{customer.phone}</p>
              </div>

              <p
                className="card-status-p"
                style={{
                  backgroundColor:
                    customer.status === "Active"
                      ? "#a0c334"
                      : customer.status === "Suspended"
                      ? "#DC1515"
                      : "#000000",
                }}
              >
                {customer.status}
              </p>
            </div>
          </div>
          {customer.displayField ? (
            <div className="card-group2-div">
              <div className="card-underline-div"></div>
              <p className="card-address-p">{customer.displayField}</p>
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
  const ChangeDataBasedOnFilter = () => {
    const data = customerData;

    if (sortOptions === "Paid") {
      const ActiveCustomers = data.filter(
        (customer) => customer.status === "Active"
      );
      const PaidCustomers = ActiveCustomers.filter(
        (customer) => customer.totalPayableAmount <= 0
      );
      setfiltercustomerData(PaidCustomers);
    } else if (sortOptions === "Unpaid") {
      const ActiveCustomers = data.filter(
        (customer) => customer.status === "Active"
      );
      const UnpaidCustomers = ActiveCustomers.filter(
        (customer) => customer.totalPayableAmount > 0
      );
      setfiltercustomerData(UnpaidCustomers);
    } else {
      setfiltercustomerData(data);
    }

    if (sortBy === "CustomerId") {
      setfiltercustomerData((prevState) =>
        [...prevState].sort((a, b) =>
          a.managedCustomerId.localeCompare(b.managedCustomerId, "en", {
            numeric: true,
            ignorePunctuation: true,
            sensitivity: "base",
          })
        )
      );
    } else if (sortBy === "Pending") {
      setfiltercustomerData((prevState) =>
        [...prevState].sort(
          (a, b) => a.totalPayableAmount - b.totalPayableAmount
        )
      );
    }

    if (sortType === "ASC") {
      setfiltercustomerData((prevState) => [...prevState].reverse());
    }
  };

  useEffect(() => {
    console.log(filtercustomerData);
  }, [filtercustomerData]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);
    ChangeDataBasedOnFilter();
  };

  return (
    <>
      <div className="customer-container">
        <div className="header-blue">
          <div className="area-div">
            <p className="area-p">Area</p>
            <input
              type={"text"}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
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
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="All">All Areas</option>
              <DropDownArea />
            </select>
          </div>

          <div className="filter-div">
            <p className="filter-p">Filter</p>
            <div className="filter-button" onClick={() => openDrawer()}>
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
                <p className="SortOptionsLabel">Active Paid Customer</p>
                <input
                  type={"radio"}
                  name={"sort-option"}
                  className="DrawerRadioButtons"
                  value="Paid"
                  checked={sortOptions === "Paid"}
                  onChange={(e) => setSortOptions(e.target.value)}
                />
              </div>
              <div className="SortOptionsContent">
                <p className="SortOptionsLabel">Active Unpaid Customer</p>
                <input
                  type={"radio"}
                  name={"sort-option"}
                  className="DrawerRadioButtons"
                  value="Unpaid"
                  checked={sortOptions === "Unpaid"}
                  onChange={(e) => setSortOptions(e.target.value)}
                />
              </div>
              <div className="SortOptionsContent">
                <p className="SortOptionsLabel">All Customers</p>
                <input
                  type={"radio"}
                  name={"sort-option"}
                  value="All"
                  className="DrawerRadioButtons"
                  checked={sortOptions === "All"}
                  onChange={(e) => setSortOptions(e.target.value)}
                />
              </div>
            </div>
            <p className="DrawerTitle">Sort By</p>
            <div className="DrawerSortColumn">
              <div>
                <input
                  type={"radio"}
                  name={"sort-by"}
                  value={"Pending"}
                  className="DrawerRadioButtons"
                  checked={sortBy === "Pending"}
                  onChange={(e) => setSortBy(e.target.value)}
                />
                <label className="DrawerRadioLabel">Pending amount</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name={"sort-by"}
                  value={"CustomerId"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  checked={sortBy === "CustomerId"}
                  onChange={(e) => setSortBy(e.target.value)}
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
                  name={"sort-type"}
                  value={"ASC"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  checked={sortType === "ASC"}
                  onChange={(e) => setSortType(e.target.value)}
                />
                <label className="DrawerRadioLabel">Ascending</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name={"sort-type"}
                  value={"DESC"}
                  id={"English"}
                  className="DrawerRadioButtons"
                  checked={sortType === "DESC"}
                  onChange={(e) => setSortType(e.target.value)}
                />
                <label className="DrawerRadioLabel">Descending</label>
              </div>
            </div>
            <button className="DrawerSubmitButton" onClick={handleFilterSubmit}>
              <span>SUBMIT</span>
            </button>
          </div>
        </Drawer>
      </div>
      <Navbar value={1} />
    </>
  );
}
