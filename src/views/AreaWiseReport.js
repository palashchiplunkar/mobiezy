import react from "react";
import "../css/AreaWiseReport.css";

export default function AreaWiseReport() {

    const areaData = [
        {
            areaName: "Banashankari 3rd Stage",
            customerCount: "23",
            pendingAmount: "4860.85",
        },
        {
            areaName: "Kathriguppe",
            customerCount: "8",
            pendingAmount: "1844.10",
        },
        {
            areaName: "Janatha Bazaar",
            customerCount: "15",
            pendingAmount: "3890.34",
        },
        {
            areaName: "Vidyapeeta Layout",
            customerCount: "12",
            pendingAmount: "3600.75",
        }
        
    ]
    const Areadata = () => {
    const AreaDataList = areaData.map((data) => {
        return (
            <div className="area-report-data-div">
                <div className="area-report-data">
                    <p className="area-report-data-label">{data.areaName}</p>
                </div>
                <div className="area-report-data">
                    <p className="area-report-data-label">{data.customerCount}</p>
                </div>
                <div className="area-report-data">
                    <p className="area-report-data-label">{data.pendingAmount}</p>
                </div>
            </div>
        );
        
    });

    return AreaDataList;
}


  return (
    <div className="container-report-area">
      <div className="headerblue-report">
        <h2 className="report-label">Area-wise Due Report</h2>
      </div>

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
            <Areadata/>
        </div>
        <div className="float-div">
                <div className="report-total">
                    <div className="total-amount-pending">
                        <p className="total-amount-pending-label">
                        Total Pending Amount  :{" "}
                        </p>
                        <p className="total-amount-collected-value">
                            ₹ 21050.00
                        </p>
                    </div>

                    <div className="total-amount-collected">
                        <p className="no-of-unpaid-label">
                        Number of Unpaid Customers :{" "}
                        </p>
                        <p className="no-of-transactions-value">47</p>
                    </div>
                </div>

               

            </div>

    </div>
  );
}
