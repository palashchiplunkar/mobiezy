import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectLanguage from "./views/SelectLanguage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
        <Route path="/select" element={<SelectLanguage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
