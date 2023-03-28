import React from "react";

import "../css/print.css";

export default function Print() {

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
    //         const encoder = new TextEncoder();
    //         const writer = port.writable.getWriter();
    //         await writer.write(encoder.encode("PING"));
    //         writer.releaseLock();
    //         // Send commands to the Bluetooth device

    //     } catch (error) {
    //         console.error("Failed to connect to serial port:", error);
    //     }
    // }

    // async function sendCommand(port, command) {
    //     try {
    //         const encoder = new TextEncoder();
    //         await port.write(encoder.encode(command));
    //         console.log("Command sent:", command);
    //         writer.releaseLock();
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
        // await navigator.bluetooth
        //     .requestDevice({
        //         acceptAllDevices: true,
        //     })

        //     .then((device) => {

        //         console.log(device.name);
        //         const server = device.gatt.connect();
        // })

        let device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
        });

        let server = await device.gatt.connect();
        console.log(server);
        let service = await server.getPrimaryService(
            "00001800-0000-1000-8000-00805f9b34fb"
        );
        // let services = await server.getPrimaryServices();
        console.log(service);
        let characteristic = await service.getCharacteristic(
            "0000182a-0000-1000-8000-00805f9b34fb"
        );
        // console.log(characteristic.properties.write = true);
        // let characteristic = await service.getCharacteristic(0x1123);
        // let characteristics = await service.getCharacteristics();
        console.log(characteristic);
        const encoder = new TextEncoder();
        const data = encoder.encode("Hello, world!");
        console.log(characteristic.readValue(data));
        // characteristic.readValue();
        // characteristics.writeValue("Jai");
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
