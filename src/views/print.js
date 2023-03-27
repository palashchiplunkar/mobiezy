import React from "react";

import "../css/print.css";

export default function Print() {
    const search = () => {
        navigator.bluetooth
            .requestDevice({ filters: [{ services: ["battery_service"] }] })
            .then((device) => {
                
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="container">
                <div className="headerblue">
                    <div className="profile-img-div">
                        <img
                            src={require("../assets/profile.jpg")}
                            className="profile_img"
                            alt=""
                        />
                    </div>

                    <button onClick={search} className="search-button">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}
