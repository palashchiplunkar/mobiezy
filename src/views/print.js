import React from "react";
// import escpos from "escpos";

import "../css/print.css";

export default function Print() {

    // const bluetoothDevice = new escpos.Bluetooth("02:1D:A4:91:66:CC", 1);
    // const bluetoothPrinter = new escpos.Printer(bluetoothDevice);

    // const search = async () => {
    //     await navigator.bluetooth
    //         .requestDevice({
    //             acceptAllDevices: true,
    //         })

    //         .then((device) => {
    //             // Human-readable name of the device.
    //             console.log(device.name);

    //             // Attempts to connect to remote GATT Server.
    //             const server = device.gatt.connect();

    //             console.log(server);
    //             window.print();
    //             // console.log(service);
    //         })

    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    const search = () => {
        var SERVICE = '000018f0-0000-1000-8000-00805f9b34fb';
        var WRITE = '00002af1-0000-1000-8000-00805f9b34fb';
        
        var DATA = ''
            + '\x1B' + '\x61' + '\x31'                                              // center align
            + '\x1D' + '\x21' + '\x11' + 'Hello\nBluetooth!\n\n'                    // double font size
            + '\x1D' + '\x21' + '\x00' + '... from your friends\nat https://qz.io'  // normal font size
            + '\n\n\n\n\n\n\n';                                                     // feed paper
        
        var deviceHandle;
        navigator.bluetooth.requestDevice({ filters: {name:'BP-201'} }).then(device => {
            console.log(device);
            deviceHandle = device;
            return device.gatt.connect()
        }).then(server => {
            console.log(server);
            return server.getPrimaryService(SERVICE);
        }).then(service => {
            console.log(service);
            return service.getCharacteristic(WRITE);
        }).then(channel => {
            console.log(channel);
            return channel.writeValue(new TextEncoder("utf-8").encode(DATA));
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            deviceHandle.gatt.disconnect();
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

    // Write a code to connexcta adn print something on thermal printer 
    // bluetoothPrinter
    // From https://github.com/WebBluetoothCG/demos/blob/gh-pages/bluetooth-printer/index.html
  


}
