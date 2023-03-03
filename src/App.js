import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectLanguage from "./views/SelectLanguage";
import Customer from "./views/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/select" element={<SelectLanguage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/customerDrawer" element={<customerDrawer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
