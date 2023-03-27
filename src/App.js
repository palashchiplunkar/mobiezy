import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";

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
import Print from "./views/print";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
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
          <Route path="/collectPayment" element={<CollectPayment />} />
          <Route path="/customerStatistics" element={<CustomerStatistics/>}/>
          <Route path="/complaints" element={<Complaints/>}/>
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;