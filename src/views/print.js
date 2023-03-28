import React from "react";

import "../css/print.css";

export default function Print() {

    const search = async () => {
        await navigator.bluetooth
            .requestDevice({
                acceptAllDevices: true,
                // filters: [{
                //     services: [0x1800]
                //   }],
                // optionalServices: ["bef8d6c9-9c21-4c9e-b632-bd58c1009f9f"]
                // optionalServices: [0x1122]
                // optionalServices: [0x181c]
                // optionalServices: [0x2A00]
            })

            .then((device) => {
                // Human-readable name of the device.
                console.log(device.name);

                // Attempts to connect to remote GATT Server.
                const server = device.gatt.connect();
            })
               
    };

    return (
        <>
            <div className="container">
                <div className="headerblue">
                    {/* <div className="profile-img-div">
                        <img
                            src={require("../assets/profile.jpg")}
                            className="profile_img"
                            alt=""
                        />
                    </div> */}

                    <button onClick={search} className="search-button">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}
