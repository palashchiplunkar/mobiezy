import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PaymentHistory.css"
export default function PaymentHistory() {
    const navigate = useNavigate();

  return (
    <div>
        <div className="HomeHeader">
                <FaAngleLeft
                    onClick={() => navigate("/home")}
                    style={{
                        color: "white",
                        height: "25px",
                        marginLeft: "20px",
                    }}
                />
                <p className="HeaderLabelHistory">Payment History</p>
            </div>
        <div className='StaticDiv'>
            <div >

            </div>

        </div>
    </div>
  )
}
