*This plugin is provided without guarantee or warranty*
=========================================================

[![npm version](http://img.shields.io/npm/v/ch-codeworx-cordova-plugin-barcodescanner-emdk.svg?style=flat-square)](https://npmjs.org/package/ch-codeworx-cordova-plugin-barcodescanner-emdk "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/ch-codeworx-cordova-plugin-barcodescanner-emdk.svg?style=flat-square)](https://npmjs.org/package/ch-codeworx-cordova-plugin-barcodescanner-emdk "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dt/ch-codeworx-cordova-plugin-barcodescanner-emdk.svg?style=flat-square)](https://npmjs.org/package/ch-codeworx-cordova-plugin-barcodescanner-emdk "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/ch-codeworx-cordova-plugin-barcodescanner-emdk.svg?style=flat-square)](https://npmjs.org/package/ch-codeworx-cordova-plugin-barcodescanner-emdk "View this project on npm")

# EMDK Barcode
This plugin defines an `emdkBarcode` object which provides an API for interacting with the __2D__ barcode scanner hardware scanner on Zebra devices.  
The EMDK library itself does support other scanner types like 1D and Camera, but this plugin is for the 2D scanner only! Feel free to change / extend it.  
The emdkBarcode object is not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(emdkBarcode);
    }

This plugin is based on [https://github.com/darryncampbell/EnterpriseBarcodePoC](https://github.com/darryncampbell/EnterpriseBarcodePoC) by Darryn Campbell

## Installation

    cordova plugin add https://github.com/DavidTalamona/Cordova-Plugin-BarcodeScanner-EMDK.git
__Requires Cordova 5.0 or higher otherwise your application will get build errors.__  
__When updating from a previous Cordova version it is necessary to re-add this plugin__
    
## Supported Platforms

- Android

## emdkBarcode.startHardRead

Enables the barcode scanner hardware and the associated trigger, __so pressing the hardware trigger will initiate a scan__.

    emdkBarcode.startHardRead(enableSuccess, enableFailure);

### Example

    emdkBarcode.startHardRead(
        function (scannedObj) {
            console.log("Scan data: " + scannedObj.data);
            console.log("Scan symbology: "  + scannedObj.type);
            console.log("Scan time: " + scannedObj.timestamp);
        },
        function (status) {
            console.log("Scanner failure: " + status.message);
        }
    );

## emdkBarcode.startSoftRead

Enables the barcode scanner hardware and the associated trigger, __it will start scanning immediately without the need of a hardware trigger__.

    emdkBarcode.startSoftRead(enableSuccess, enableFailure);

### Example

    emdkBarcode.startSoftRead(
        function (scannedObj) {
            console.log("Scan data: " + scannedObj.data);
            console.log("Scan symbology: "  + scannedObj.type);
            console.log("Scan time: " + scannedObj.timestamp);
        },
        function (status) {
            console.log("Scanner failure: " + status.message);
        }
    );

## emdkBarcode.stopReading

Stops the currently active scan.

    emdkBarcode.stopReading();
