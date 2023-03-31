import React, { useEffect, useState } from "react";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import API from "../services/API";

import "../css/MonthlyReport.css";
import "../css/global.css";
import { Spinner } from "react-bootstrap";

export default function DailyReport() {
  const [agentData, setAgentData] = useState([]);
  const [CollectedAmount, setCollectedAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [length, setLength] = useState(0);
  const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const user = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  );

  const OwnerSelection = () => {
    const OwnerSelectionData = agentData.map((data) => {
      return <option value={data.Agent_Id}>{data.Name}</option>;
    });
    return OwnerSelectionData;
  };

  const handleDropChange = (e) => {
    setSelected(e.target.value);
  };

  let ownerDataRequest = {
    agentId: user.agentId,
    operatorId: user.operatorId,
    dailyReport: "Y",
  };

  const fetchOwnerData = () => {
    setMessage("");
    try {
      API.dailyReportAPI(ownerDataRequest).then((response) => {
        if (response.data.length > 0) {
          setIsLoading(false);
          setOwnerDataforDropdown(response.data.report);
          setCollectedAmount(response.data.report[0].totalCollectedAmount);
          const length = response.data.report.length;
          setLength(length);
        } else {
          setIsLoading(false);
          setMessage("No Collection Today");
        }
      });
    } catch (error) {
      setIsLoading(false);
      setMessage("Some Error has occured Please Retry");
    }
  };

  const fetchDropdownData = () => {
    setMessage("");
    try {
      API.dropdownAgentDataAPI({ operatorId: user.operatorId }).then(
        (response) => {
          setAgentData(response.data.all_agents);
        }
      );
    } catch (error) {
      console.log(error);
      setMessage("Some Error has occured Please Retry");
    }
  };

  const getFilterReport = () => {
    setMessage("");
    setIsLoading(true);
    if (selected == "Owner Summary") {
      fetchOwnerData();
    } else {
      const body = {
        agentId: selected,
        operatorId: user.operatorId,
        dailyReport: "Y",
        considerAgentType: "N",
      };
      API.dailyReportAPI(body)
        .then((response) => {
          if (response.data.length > 0) {
            setIsLoading(false);
            setOwnerDataforDropdown(response.data.report);
            setCollectedAmount(response.data.report[0].totalCollectedAmount);
            const length = response.data.report.length;
            setLength(length);
          } else {
            setIsLoading(false);
            setMessage("No Collection Today");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setMessage("Some Error has occured Please Retry");
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDropdownData();
    fetchOwnerData();
  }, []);

  const Owners = () => {
    const OwnerDataList = ownerDataforDropdown.map((data) => {
      return (
        <OwnerData
          ownerid={data.customerId}
          owneramt={data.collectedAmount}
          ownername={data.customerName}
        />
      );
    });
    return OwnerDataList;
  };

  const headerprops = {
    text: "Daily Report",
  };

  return (
    <>
      <Header name={"Daily Report"} />
      <div className="container-report">
        <div className="get-report-div">
          <select
            className="get-report-dropdown"
            id="ownerselect"
            value={selected}
            onChange={handleDropChange}
          >
            <option value={"Owner Summary"}>Owner Summary</option>
            <option value="0">Office</option>
            <option value="1">Online</option>
            <OwnerSelection />
            {/* <option value={data.customerName}>{data.customerName}</option> */}
          </select>
          <button className="get-report-btn" onClick={getFilterReport}>
            Get Report
          </button>
        </div>

        {message && (
          <div style={{ position: "absolute" }}>
            {message}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isLoading && (
            <Spinner
              animation="border"
              variant="info"
              style={{ position: "absolute", marginTop: "50vw" }}
            />
          )}
        </div>

        <div className="report-data">
          <Owners />
        </div>

        <div className="float-div">
          <div className="report-total">
            <div className="total-amount-collected">
              <p className="total-amount-collected-label">
                Total Amount Collected :{" "}
              </p>
              <p className="total-amount-collected-value">
                ₹{""}
                {CollectedAmount}
              </p>
            </div>

            <div className="total-amount-collected">
              <p className="no-of-transactions-label">
                Number of Transactions :{" "}
              </p>
              <p className="no-of-transactions-value">{length}</p>
            </div>
          </div>

          <button className="print-report-btn">PRINT REPORT</button>
        </div>
      </div>
    </>
  );
}
