import react from "react";
import "../css/AreaWiseReport.css";
import "../css/global.css";
import Header from "../components/header";
import monthlyReportAPI from "../services/monthlyReportAPI";
import { useEffect, useState } from "react";
export default function AreaWiseReport() {
  const [areadata, setAreaData] = useState([]);
  const [totalpendingAmount, setTotalPending] = useState(0);
  const [totalupaidCustomer, setTotalUnpaid] = useState(0);

  let userJson;
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  if (user) {
    userJson = JSON.parse(user);
  }
  const Areadata = () => {
    const AreaDataList = areadata.map((data) => {
      return (
        <div className="area-report-data-div">
          <div className="area-report-data">
            <p className="area-report-data-label">{data.AREA}</p>
          </div>
          <div className="area-report-data">
            <p className="area-report-data-label">{data.cust_count}</p>
          </div>
          <div className="area-report-data">
            <p className="area-report-data-label">{data.pending}</p>
          </div>
        </div>
      );
    });

    return AreaDataList;
  };

  // create a props object to pass the text and height of the header
  const headerprops = {
    text: "Area-wise Due Report",
    height: "10vh",
  };

  useEffect(() => {
    monthlyReportAPI
      .post("/mobile-agentareasummary", {
        agentId: userJson.agentId,
        operatorId: userJson.operatorId,
      })
      .then((response) => {
        setAreaData(response.data.results);
        // console.log(response.data.results);
        let totalpending = 0;
        let totalunpaid = 0;
        response.data.results.map((data) => {
          totalpending += parseInt(data.pending);
          totalunpaid += parseInt(data.cust_count);
        });
        setTotalPending(totalpending);
        setTotalUnpaid(totalunpaid);
      });
  });

  return (
    <div className="container-report-area">
      <Header {...headerprops} />

      <div className="report-data-container">
        <div className="area-report-head-div">
          {/* three heading in single line */}

          <div className="area-report-head">
            <p className="area-report-head-label">Area Name</p>
          </div>
          <div className="area-report-head">
            <p className="area-report-head-label">Customer Count</p>
          </div>
          <div className="area-report-head">
            <p className="area-report-head-label">Pending Amount</p>
          </div>
        </div>
      </div>
      <div className="report-data">
        <Areadata />
      </div>
      <div className="float-div">
        <div className="report-total">
          <div className="total-amount-pending">
            <p className="total-amount-pending-label">
              Total Pending Amount :{" "}
            </p>
            <p className="total-amount-collected-value">
              ₹ {totalpendingAmount}
            </p>
          </div>

          <div className="total-amount-collected">
            <p className="no-of-unpaid-label">Number of Unpaid Customers : </p>
            <p className="no-of-transactions-value">{totalupaidCustomer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
