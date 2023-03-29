import React from "react";
import { useState } from "react";

import Navbar from "../components/navbar";
import "../css/print.css";

export default function Print() {
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    // const printData = {
    //     heading: "\n     ------CABLE TV------\n",
    //     dottedLine1: "-------------------------------",
    //     billHeading: "\n          Last Bill\n",
    //     receiptNo: "\n  Receipt No : 9030405205276M1",
    //     custID: "\n  Customer ID   : M1",
    //     custName: "\n  Customer Name : M21  \n\n",
    //     endLine: "\n\n",
    // };

    const printData = {
        heading: "\n     ------Mobiezy------\n",
        dottedLine1: "-------------------------------",
        billHeading: "\n      Your Message:\n",
        receiptNo: "\n         ",
        msg: input.toString(),
        endLine: "\n-------------------------------\n",
        finalLine: "\n\n"
    };

    const search = async () => {
        let device = await navigator.bluetooth.requestDevice({
            // filters : [{services: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"]}],
            acceptAllDevices: true,
            optionalServices: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"],
        });

        let server = await device.gatt.connect();

        // console.log(devicenew.gatt);

        let service = await server.getPrimaryService(
            "e7810a71-73ae-499d-8c15-faa9aef0c3f2"
        );

        console.log(service);

        let characteristic = await service.getCharacteristic(
            "bef8d6c9-9c21-4c9e-b632-bd58c1009f9f"
        );

        console.log(characteristic);
        const encoder = new TextEncoder();

        for (const i in printData) {
            console.log(`${printData[i]}`);
            try {
                await characteristic.writeValue(encoder.encode(printData[i]));
                console.log(encoder.encode(printData[i]));
            } catch (error) {
                console.log(error);
            }
        }
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

                    <input
                        className="text-input"
                        type="text"
                        placeholder="Type Message"
                        onChange={handleInput}
                    />

                    <button onClick={search} className="print-button">
                        Print
                    </button>

                    <h2
                        style={{
                            position: "relative",
                            marginTop: "10%",
                        }}
                    >
                        Message : {input}
                    </h2>
                </div>
            </div>
            <Navbar value={3} />
        </>
    );
}
