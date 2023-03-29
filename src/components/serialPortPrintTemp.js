

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
