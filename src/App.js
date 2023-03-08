import { BrowserRouter, Routes, Route,redirect, Navigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectLanguage from "./views/SelectLanguage";
import Customer from "./views/Customer";
import Navbar from "./components/navbar";
import MonthReport from "./views/MonthlyReport";
import DailyReport from "./views/DailyReport";
import MoreOptions from "./views/MoreOptions";
import AreaWiseReport from "./views/AreaWiseReport";

function App() {
  const isAuthenticated=!!localStorage.getItem("user")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/select" element={<SelectLanguage/>}/>
       
        <Route path="/home" element={<HomePage/> }/>

        <Route path="/customer" element={<Customer/>}/>
        <Route path="/customerDrawer" element={<customerDrawer/>}/>
        <Route path="/monthlyReport" element={<MonthReport/>}/>
        <Route path="/dailyReport" element={<DailyReport/>}/>
        <Route path="/dailyReport" element={<DailyReport/>}/>
        <Route path="/more" element={<MoreOptions/>}/>

        <Route path="/areaWiseReport" element={<AreaWiseReport/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
