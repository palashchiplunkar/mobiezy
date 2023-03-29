import React from "react";

import "../css/print.css";

export default function Print() {
    const [connection,setConnection]=React.useState(false);
    const [devicenew , setDeviceNew]=React.useState([]);
    // async function requestSerialPort() {
    //     try {
    //         const port = await navigator.serial.requestPort();
    //         console.log("Serial port selected:", port);
    //         return port;
    //     } catch (error) {
    //         console.error("Failed to request serial port:", error);
    //     }
    // }

    // async function connectToBluetoothDevice(port) {
    //     try {
    //         await port.open({
    //             baudRate: 115200,
    //             dataBits: 8,
    //             stopBits: 1,
    //             parity: "none",
    //         });
    //         console.log("Connected to serial port:", port);

    //         // Send commands to the Bluetooth device
    //     } catch (error) {
    //         console.error("Failed to connect to serial port:", error);
    //     }
    // }

    // async function sendCommand(port, command) {
    //     try {
    //         const encoder = new TextEncoder();
    //         const writer = port.writable.getWriter();
    //         await writer.write(encoder.encode("JAI!!!!!!!!"));

    //         console.log("Command sent:", command);
    //     } catch (error) {
    //         console.error("Failed to send command:", error);
    //     }
    // }

    // async function connectToDevice() {
    //     const port = await requestSerialPort();
    //     if (port) {
    //         await connectToBluetoothDevice(port);
    //         await sendCommand(port, "AT\r\n");
    //     }
    // }

    const search = async () => {
        // if(!connection){
        let device = await navigator.bluetooth.requestDevice({
            // filters : [{services: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"]}],
            acceptAllDevices: true,
            optionalServices: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"]
        });

        let server = await device.gatt.connect();
        setConnection(true);
        setDeviceNew(device);
    
    
        console.log(devicenew.gatt);

        let service = await server.getPrimaryService(
            "e7810a71-73ae-499d-8c15-faa9aef0c3f2"
        );

        console.log(service);

        let characteristic = await service.getCharacteristic(
            "bef8d6c9-9c21-4c9e-b632-bd58c1009f9f"
        )

        console.log(characteristic);
        const encoder = new TextEncoder();
        // let data = encoder.encode("\n     ------CABLE TV------\n-------------------------------\n          Last Bill\n\n  Receipt No : 9030405205276M1\n  Customer ID   : M1\n  Customer Name : M21  \n\n");
        // let data=encoder.encode("Hello World\n\n");

        // characteristic.writeValue(data);
        for (let i = 0; i < 50; i++) {
        //    Add a delay to make it easier to see the effect.
        // await sleep(100);
        // characteristic.writeValue(encoder.encode("Hello World\n\n"));
        try {
            await characteristic.writeValue(encoder.encode("Hello World\n\n"));
            console.log(`Write value ${i} successful`);
        } catch (error) {
            console.error(`Error writing value ${i}: ${error}`);
        }

        }
        }
        

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
                    {/* <button onClick={printArea} className="search-button">
                        Print
                    </button> */}
                </div>
            </div>
        </>
    );
}
