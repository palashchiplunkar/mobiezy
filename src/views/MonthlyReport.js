import React, { useState, useEffect, useRef } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import API from "../services/API";
import "../css/MonthlyReport.css";
import "../css/global.css";
import { Spinner } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function MonthlyReport() {
  const [agentData, setAgentData] = useState([]);
  const [CollectedAmount, setCollectedAmount] = useState(0);
  const [length, setLength] = useState(0);
  const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("Owner Summary");
  const [startDate, setstartDate] = useState(null);
  const [startDateOpen, setstartDateOpen] = useState(false);
  const [endDateOpen, setendDateOpen] = useState(false);
  const [endDate, setendDate] = useState(null);

  const [Error, setError] = useState("");
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

  const handlestartdate = (date) => {
    setstartDate(format(date, "yyyy-MM-dd"));
    setstartDateOpen(!startDateOpen);
    setendDateOpen(false);
  };

  const handleenddate = (date) => {
    setendDate(format(date, "yyyy-MM-dd"));
    setstartDateOpen(false);
    setendDateOpen(!endDateOpen);
  };

  const fetchOwnerData = (agentType) => {
    let ownerDataRequest;
    if (agentType) {
      ownerDataRequest = {
        agentId: user.agentId,
        considerAgentType: agentType,
        operatorId: user.operatorId,
        Startdate: startDate ? startDate : "",
        Enddate: endDate ? endDate : "",
        dailyReport: "F",
        flag: "N",
      };
      console.log("filterowner", ownerDataRequest);
      setOwnerDataforDropdown([]);

      try {
        API.dailyReportAPI(ownerDataRequest).then((response) => {
          if (response.data.report.length > 0) {
            setIsLoading(false);
            setOwnerDataforDropdown(response.data.report);
            setCollectedAmount(response.data.report[0].totalCollectedAmount);
            const length = response.data.report.length;
            setLength(length);
            setError("");
          } else {
            console.log("filterowner", response);
            setOwnerDataforDropdown([]);
            setCollectedAmount(0);
            setLength(0);
            setError("No details Found");
          }
        });
      } catch (error) {
        setError("No details Found");
        console.log(error.message);
      }
    } else {
      ownerDataRequest = {
        agentId: user.agentId,
        operatorId: user.operatorId,
        Startdate: "",
        Enddate: "",
        flag: "N",
        dailyReport: "N",
      };

      console.log("owner", ownerDataRequest);
      setOwnerDataforDropdown([]);

      try {
        API.dailyReportAPI(ownerDataRequest).then((response) => {
          if (response.data.report.length > 0) {
            setIsLoading(false);
            console.log(response);
            setOwnerDataforDropdown(response.data.report);
            setCollectedAmount(response.data.report[0].totalCollectedAmount);
            const length = response.data.report.length;
            setLength(length);
            setError("");
          } else {
            setOwnerDataforDropdown([]);
            setCollectedAmount(0);
            setLength(0);
            setError("No details Found");
          }
        });
      } catch (error) {
        setError("No details Found");
        console.log(error.message);
      }
    }
  };

  const fetchDropdownData = () => {
    try {
      API.dropdownAgentDataAPI({ operatorId: user.operatorId }).then(
        (response) => {
          setAgentData(response.data.all_agents);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getFilterReport = () => {
    console.log("getfilter report", selected);
    if (selected == "Owner Summary") {
      setIsLoading(true);
      fetchOwnerData("Y");
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setError("");

      const body = {
        agentId: selected,
        considerAgentType: "N",
        operatorId: user.operatorId,
        Startdate: startDate ? startDate : "",
        Enddate: endDate ? endDate : "",
        dailyReport: "N",
      };
      console.log("Agent Api Called ", body);
      setOwnerDataforDropdown([]);
      API.dailyReportAPI(body)
        .then((response) => {
          if (response.data.report.length > 0) {
            setOwnerDataforDropdown(response.data.report);

            setCollectedAmount(response.data.report[0].totalCollectedAmount);
            const length = response.data.report.length;
            setLength(length);
            setError("");
          } else {
            setOwnerDataforDropdown([]);
            setError("No Details Found");
            setCollectedAmount(0);
            setLength(0);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setCollectedAmount(0);
          setLength(0);
          setError("No Details Found");

          console.log(err.message);
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
    text: "Monthly Report",
    height: "10vh",
  };

  return (
    <div className="container-report">
      <Header {...headerprops} />

      <div className="date-report">
        <div className="from-date">
          <p className="from-date-label">From Date</p>
          <div>
            <input
              readOnly
              value={startDate || ""}
              className="inputFocus"
              onClick={() => {
                setstartDateOpen(!startDateOpen);
                setendDateOpen(false);
              }}
              placeholder={"From Date"}
            />
            <RiCalendarEventFill
              style={{
                color: "#0090DA",
                width: "3vh",
                height: "3vh",
                marginLeft: "10px",
              }}
              onClick={() => {
                setstartDateOpen(!startDateOpen);
                setendDateOpen(false);
              }}
            />
          </div>
          {startDateOpen && (
            <div style={{ position: "absolute", top: "4vh", left: "0.5vh" }}>
              <Calendar date={new Date()} onChange={handlestartdate} />
            </div>
          )}
        </div>

        <div className="to-date">
          <p className="to-date-label">End Date</p>
          {/* <DatePicker
                        calendarIcon={
                            <RiCalendarEventFill style={{ color: "#0090DA" }} />
                        }
                        onChange={(date) => handleenddate(date)}
                        value={endDate}
                        monthPlaceholder={"MM"}
                        dayPlaceholder={"DD"}
                        yearPlaceholder={"YY"}
                        className={"react-datepicker-wrapper"}
                        clearIcon={null}
                    /> */}
          <div>
            <input
              readOnly
              value={endDate || ""}
              className="inputFocus"
              onClick={() => {
                setendDateOpen(!endDateOpen);
                setstartDateOpen(false);
              }}
              placeholder={"End Date"}
            />
            <RiCalendarEventFill
              style={{
                color: "#0090DA",
                width: "3vh",
                height: "3vh",
                marginLeft: "10px",
              }}
              onClick={() => {
                setendDateOpen(endDateOpen);
                setstartDateOpen(false);
              }}
            />
          </div>
          {endDateOpen && (
            <div style={{ position: "absolute", top: "4vh", right: "0.5vh" }}>
              <Calendar date={new Date()} onChange={handleenddate} />
            </div>
          )}
        </div>
      </div>

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

      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading && (
          <Spinner
            animation="border"
            variant="info"
            style={{ marginTop: "100px" }}
          />
        )}
        {Error && <p style={{ marginTop: "100px" }}>{Error}</p>}
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
  );
}
