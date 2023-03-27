import React from "react";

import "../css/print.css";

export default function Print() {

    const print = () => {
        navigator.bluetooth
            .writeValue((device) => {
        
            })
    }

    const search = () => {
        navigator.bluetooth
            .requestDevice({
                acceptAllDevices: true,
                // optionalServices: ["battery_service"], // Required to access service later.
            })
            .then((device) => {
                // Human-readable name of the device.
                console.log(device.name);

                // Attempts to connect to remote GATT Server.
                return device.gatt.connect();
            })

            .then(characteristic => {
                // Writing 1 is the signal to reset energy expended.
                const resetEnergyExpended = "H";
                return characteristic.writeValue(resetEnergyExpended);
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
