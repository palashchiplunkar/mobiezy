import React, { useState, useEffect } from "react";
import { RiCalendarEventFill } from "react-icons/ri";
import OwnerData from "../components/ownerdatadiv";
import Header from "../components/header";
import GetReportDiv from "../components/getReportDiv";
import ReactLoading from "react-loading";
import API from "../services/API";

import "../css/MonthlyReport.css";
import "../css/global.css";
import { Spinner } from "react-bootstrap";

// export default function MonthReport() {

//     const [agentData, setAgentData] = useState([]);
//     const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
//     const [CollectedAmount, setCollectedAmount] = useState(0);
//     const [length, setLength] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);

//     const user = JSON.parse(
//         localStorage.getItem("user") || sessionStorage.getItem("user")
//     );

//     let monthlyReportAPIParams = {
//         agentId: user.agentId,
//         operatorId: user.operatorId,
//         Startdate: "",
//         Enddate: "",
//         flag: "N",
//         dailyReport: "N",
//     };

//     const fetchOwnerData = () => {
//         try {
//             API.monthlyReportAPI(monthlyReportAPIParams)
//             .then((response) => {
//                 setIsLoading(false);
//                 setAgentData(response.data.report);
//                 setOwnerDataforDropdown(response.data.report);
//                 setCollectedAmount(
//                     response.data.report[0].totalCollectedAmount
//                 );

//                 const length = response.data.report.lenght;
//                 setLength(length);
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const fetchDropdownData = () => {
//         try {
//             API.dropdownAgentDataAPI({ operatorId: user.operatorId }).then(
//                 (response) => {
//                     // console.log(response.data);
//                     setAgentData(response.data.all_agents);
//                 }
//             );

//             console.log(agentData);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         setIsLoading(true);
//         fetchOwnerData();
//         fetchDropdownData();
//     }, []);

//     const handletodate = () => {
//         const todateInput = document.getElementById("todate");
//         todateInput.focus();

//         todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     };

//     const handlefromdate = () => {
//         const fromdateInput = document.getElementById("fromdateinp");
//         fromdateInput.focus();

//         fromdateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     };

//     const Owners = () => {
//         const OwnerDataList = ownerDataforDropdown.map((data) => {
//             return (
//                 <OwnerData
//                     ownerid={data.customerId}
//                     owneramt={data.collectedAmount}
//                     ownername={data.customerName}
//                 />
//             );
//         });
//         return OwnerDataList;
//     };

//     const headerprops = {
//         text: "Monthly Report",
//         height: "10vh",
//     };

//     return (
//         <div className="container-report">
//             <Header {...headerprops} />

//             <div className="date-report">
//                 <div className="from-date">
//                     <p className="from-date-label">From Date</p>
//                     <input
//                         className="from-date-input"
//                         type="date"
//                         id="fromdateinp"
//                     />
//                     <RiCalendarEventFill
//                         className="from-date-calender-icon"
//                         onClick={handlefromdate}
//                     />
//                 </div>

//                 <div className="to-date">
//                     <p className="to-date-label">End Date</p>
//                     <input className="to-date-input" type="date" id="todate" />
//                     <RiCalendarEventFill
//                         className="to-date-calender-icon"
//                         onClick={handletodate}
//                     />
//                 </div>
//             </div>

//             <GetReportDiv agentData={agentData} setAgentData={setAgentData} />

//             <div style={{ display: "flex", justifyContent: "center" }}>
//                 {isLoading && (
//                     <Spinner animation="border" variant="info" style={{marginTop:"100px"}}/>

//                 )}
//             </div>

//             <div className="report-data">
//                 <Owners />
//             </div>

//             <div className="float-div">
//                 <div className="report-total">
//                     <div className="total-amount-collected">
//                         <p className="total-amount-collected-label">
//                             Total Amount Collected :{" "}
//                         </p>
//                         <p className="total-amount-collected-value">
//                             ₹ {CollectedAmount}
//                         </p>
//                     </div>

//                     <div className="total-amount-collected">
//                         <p className="no-of-transactions-label">
//                             Number of Transactions :{" "}
//                         </p>
//                         <p className="no-of-transactions-value">{length}</p>
//                     </div>
//                 </div>

//                 <button className="print-report-btn">PRINT REPORT</button>
//             </div>
//         </div>
//     );
// }

//

export default function MonthlyReport() {
  const [agentData, setAgentData] = useState([]);
  const [CollectedAmount, setCollectedAmount] = useState(0);
  const [length, setLength] = useState(0);
  const [ownerDataforDropdown, setOwnerDataforDropdown] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [startDate, setstartDate] = useState(null)
  const [endDate, setendDate] = useState(null)

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

  const handletodate = (e) => {
    const todateInput = document.getElementById("todate");
    todateInput.focus();
    todateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    setstartDate(e.target.value);
    console.log(e.target.value)
};

  const handlefromdate = (e) => {
    const fromdateInput = document.getElementById("fromdateinp");
    fromdateInput.focus();

    fromdateInput.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    setendDate(e.target.value)
    console.log(e.target.value)

};

  const fetchOwnerData = (agentType,stdate,eddate) => {
    let ownerDataRequest;
    if (agentType) {
      ownerDataRequest = {
        agentId: selected,
        considerAgentType: agentType,
        operatorId: user.operatorId,
        Startdate: "",
        dailyReport: "N",
      };
    } else {
      ownerDataRequest = {
        agentId: user.agentId,
        operatorId: user.operatorId,
        Startdate: "",
        Enddate: "",
        flag: "N",
        dailyReport: "N",
      };
    }
    try {
      API.dailyReportAPI(ownerDataRequest).then((response) => {
        // Set owner data state to the API response
        setIsLoading(false);

        setOwnerDataforDropdown(response.data.report);
        setCollectedAmount(response.data.report[0].totalCollectedAmount);

        // get length of the response
        const length = response.data.report.length;
        setLength(length);
      });
    } catch (error) {
      console.log(error);
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
    // console.log(selected,user.agentId)
    if (selected == "Owner Summary") {
      fetchOwnerData("Y");
    } else {
      const body = {
        agentId: selected,
        considerAgentType: "N",
        operatorId: user.operatorId,
        Startdate: "",
        dailyReport: "N",
      };
      API.dailyReportAPI(body)
        .then((response) => {
          setOwnerDataforDropdown(response.data.report);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDropdownData();
    fetchOwnerData();
  }, []);
  //   useEffect(() => {
  //     setIsLoading(true)
  //     fetchDropdownData();
  //   }, [selected]);

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
          <input className="from-date-input" type="date" id="fromdateinp" />
          <RiCalendarEventFill
            className="from-date-calender-icon"
            value={startDate}
            onClick={handlefromdate}
          />
        </div>

        <div className="to-date">
          <p className="to-date-label">End Date</p>
          <input className="to-date-input" type="date" id="todate" />
          <RiCalendarEventFill
            className="to-date-calender-icon"
            value={endDate}

            onClick={handletodate}
          />
        </div>
      </div>

      {/* <GetReportDiv
                agentData={agentData}
                setAgentData={setAgentData}
                ownerDataforDropdown={ownerDataforDropdown}
                setOwnerDataforDropdown={setOwnerDataforDropdown}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setCollectedAmount={setCollectedAmount}
                setLength={setLength}
                operatorId={operatorId}
            /> */}

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
