import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectLanguage from "./views/SelectLanguage";
import Customer from "./views/Customer";
import Navbar from "./components/navbar";
import MonthReport from "./views/MonthlyReport";
import DailyReport from "./views/DailyReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/select" element={<SelectLanguage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/customerDrawer" element={<customerDrawer/>}/>
        <Route path="/monthlyReport" element={<MonthReport/>}/>
        <Route path="/dailyReport" element={<DailyReport/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
