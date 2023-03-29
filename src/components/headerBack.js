import React from "react";

export default function headerBack() {
    return (
        <div>
            <FaAngleLeft
                onClick={() => navigate("/home")}
                style={{
                    color: "white",
                    height: "25px",
                    marginLeft: "20px",
                }}
            />
        </div>
    );
}
