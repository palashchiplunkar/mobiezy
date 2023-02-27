import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginStyles.css";
export default function LoginPage() {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/home');
    }
  return (
    <div className="container">
      <div className="App-content">
        <img
          src={require("../assets/d1.png")}
          alt="image"
          style={{ width: "100%" }}
        />
        <img
          src={require("../assets/MobiCable.JPG")}
          alt="image1"
          style={{ width: "80%", margin: "2vh" }}
        />
        <div className="form">
          <div className="form-elements">
            <label className="name">User Name</label>
            <input type="text" name="name" placeholder="Enter User Name" />
          </div>
          <div className="form-elements">
            <label className="pass">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-elements">
            <input type={"checkbox"} style={{width:'2vh',height:'2vh',marginRight:'2vh'}}/>
            <label>Remember Me</label>
          </div>
          <button
            type="submit"
            onClick={()=>handleSubmit()}
            style={{
              color: "white",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#2297fd",
              height: "5vh",
              width: "20vh",
              fontWeight: "bold",
              margin: "5vh",
            
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
