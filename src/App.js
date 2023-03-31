import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectLanguage from "./views/SelectLanguage";
import Customer from "./views/Customer";
import MonthReport from "./views/MonthlyReport";
import DailyReport from "./views/DailyReport";
import MoreOptions from "./views/MoreOptions";
import AreaWiseReport from "./views/AreaWiseReport";
import SubscriptionExpiryReport from "./views/SubscriptionExpiryReport";
import CollectPayment from "./views/CollectPayment";
import CustomerStatistics from "./views/CustomerStatistics";
import PrivateRoutes from "./components/PrivateRoutes";
import Complaints from "./views/Complaints";
import Print from "./views/Print";
import PaymentHistory from "./views/PaymentHistory";
import HistoryVisit from "./views/HistoryVisit";
import RecordVisit from "./views/RecordVisit";
import EditCustomer from "./views/EditCustomer";
import EditSetTopBox from "./views/EditSetTopBox";
import STBHistory from "./views/STBHistory";

function App() {
  window.addEventListener("online", handleConnection);
  window.addEventListener("offline", handleConnection);

  function handleConnection() {
    if (navigator.onLine) {
      console.log("Online");
    } else {
      console.log("Offline");
      window.location.reload();
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/select" element={<SelectLanguage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customerDrawer" element={<customerDrawer />} />
          <Route path="/monthlyReport" element={<MonthReport />} />
          <Route path="/dailyReport" element={<DailyReport />} />
          <Route path="/more" element={<MoreOptions />} />
          <Route path="/areaWiseReport" element={<AreaWiseReport />} />
          <Route
            path="/subExpiryReport"
            element={<SubscriptionExpiryReport />}
          />
          <Route path="/customerStatistics" element={<CustomerStatistics />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/print" element={<Print />} />

          <Route path="/collectPayment">
            <Route index element={<CollectPayment />} />
            <Route path="history">
              <Route index element={<PaymentHistory />} />
              <Route path="stbHistory" element={<STBHistory />} />
            </Route>
            <Route path="recordVisit">
              <Route index element={<RecordVisit />} />
              <Route path="historyVisit" element={<HistoryVisit />} />
            </Route>
            <Route path="editCustomer" element={<EditCustomer />} />
            <Route path="editSetTopBox" element={<EditSetTopBox />} />
          </Route>
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
