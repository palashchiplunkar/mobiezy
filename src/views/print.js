import React from "react";

import "../css/print.css";

export default function Print() {
    async function requestSerialPort() {
        try {
            const port = await navigator.serial.requestPort();
            console.log("Serial port selected:", port);
            return port;
        } catch (error) {
            console.error("Failed to request serial port:", error);
        }
    }

    async function connectToBluetoothDevice(port) {
        try {
            await port.open({
                baudRate: 115200,
                dataBits: 8,
                stopBits: 1,
                parity: "none",
            });
            console.log("Connected to serial port:", port);

            // Send commands to the Bluetooth device
        } catch (error) {
            console.error("Failed to connect to serial port:", error);
        }
    }

    async function sendCommand(port, command) {
        try {
            const encoder = new TextEncoder();
            const writer = port.writable.getWriter();
            await writer.write(encoder.encode("JAI!!!!!!!!"));

            console.log("Command sent:", command);
        } catch (error) {
            console.error("Failed to send command:", error);
        }
    }

    async function connectToDevice() {
        const port = await requestSerialPort();
        if (port) {
            await connectToBluetoothDevice(port);
            await sendCommand(port, "AT\r\n");
        }
    }

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
            optionalServices: ["e7810a71-73ae-499d-8c15-faa9aef0c3f2"],
        });

        let server = await device.gatt.connect();

        console.log(server);

        let service = await server.getPrimaryService(
            "e7810a71-73ae-499d-8c15-faa9aef0c3f2"
        );

        // let services = await server.getPrimaryServices();

        console.log(service);

        // let characteristics = await service.getCharacteristics();
        // let characteristic = await service.getCharacteristic(
        //     "0000182a-0000-1000-8000-00805f9b34fb"
        // );

        let characteristic = await service.getCharacteristic(
            "bef8d6c9-9c21-4c9e-b632-bd58c1009f9f"
        );

        console.log(characteristic);
        const encoder = new TextEncoder();
        const data = encoder.encode("\n\n\n\n\nVarshith v hegde\na");
        // console.log(characteristic.writeValue(data));
        // characteristic.readValue();
        characteristic.writeValue(data);
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
