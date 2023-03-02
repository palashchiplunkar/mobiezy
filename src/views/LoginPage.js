import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginStyles.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="App">
      <img className="bg-img" src={require("../assets/BG.JPG")} />

      <div className="authForm">
        <img className="header-img1" src={require("../assets/d1.png")} />
        <img
          className="mobicable-logo"
          src={require("../assets/MobiCable.jpg")}
        />

        <form className="login">
          <label className="user-label">User Name</label>
          <input
            required="true"
            type="text"
            autocomplete="off"
            className="username"
            placeholder="Enter User Name"
          />

          <label className="passwd-label">Password</label>
          <input
            required="true"
            type="password"
            autocomplete="off"
            className="passwd"
            placeholder="Enter Password"
          />

          <div className="remember-me-div">
            <input className="rmcb" type="checkbox" />
            <label class="rememberme">Remeber me</label>
          </div>

          <div className="login-btn-div">
            <button className="loginBtn" onClick={() => handleSubmit()}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
