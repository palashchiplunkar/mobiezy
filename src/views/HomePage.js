import React from 'react'
import Navbar from '../components/navbar'
import "../css/HomeStyles.css"
export default function HomePage() {
  return (
    <div class="container">
        <div class="headerblue">
        {/* Add three lines for side navbar */}
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <p class="Company_name">KOORG BROADBAND SERVICES <br></br>PRIVATE LIMITED</p>
        
        <img src="../../public/assets/profile.jpg" class="profile_img"/>
        </div>
        <p class="username">Hi, Dinesh</p>
        <div class="amount_due">
          <label >Total Amount Due as on Today</label>
          <label>2310086.00</label>
        </div>
        <div class="amount_collected_month">
          <label >Amount Collected in this Month</label>
          <label>10086</label>
        </div>
        <div class="amount_collected_today">
          <label >Amount Collected in this Today</label>
          <label>2100</label>
        </div>
        <div class="complaints">
          <label>Number of Open Complaints</label>
          <label>12</label>
        </div>
        <button
            type="submit"
            
            style={{
              color: "white",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#2297fd",
              height: "7vh",
              width: "224px",
              fontWeight: "bold",
              margin: "48px",
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'

            
            }}
          >
            COLLECT BILL
          </button>
          <Navbar/>
    </div>
  )
}
