import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function HeaderBack() {
    let navigate = useNavigate();

    return (
        <div>
            <FaAngleLeft
                onClick={() => navigate(-1)}
                style={{
                    color: "white",
                    height: "25px",
                    marginLeft: "20px",
                }}
            />
        </div>
    );
}
