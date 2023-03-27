import React from "react";
import escpos from "escpos";

import "../css/print.css";

export default function Print() {

    const bluetoothDevice = new escpos.Bluetooth("02:1D:A4:91:66:CC", 1);
    const bluetoothPrinter = new escpos.Printer(bluetoothDevice);

    const search = async () => {
        await navigator.bluetooth
            .requestDevice({
                acceptAllDevices: true,
            })

            .then((device) => {
                // Human-readable name of the device.
                console.log(device.name);

                // Attempts to connect to remote GATT Server.
                const server = device.gatt.connect();

                console.log(server);
                window.print();
                // console.log(service);
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
