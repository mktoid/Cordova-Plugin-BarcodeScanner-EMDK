var argscheck = require('cordova/argscheck'),
	channel = require('cordova/channel'),
	utils = require('cordova/utils'),
	exec = require('cordova/exec'),
	cordova = require('cordova');

channel.createSticky('onEmdkBarcodeReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onEmdkBarcodeReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function EmdkBarcode () {
	this.available = false;
	var me = this;

	channel.onCordovaReady.subscribe(function () {
		exec(function () {
			me.available = true;
			channel.onEmdkBarcodeReady.fire();
		}, function () {
			me.available = false;
		}, "EmdkBarcode", "init", []);
	});
}

EmdkBarcode.prototype.startHardRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EmdkBarcode.startHardRead', arguments);
	exec(successCallback, errorCallback, "EmdkBarcode", "startHardRead", []);
};

EmdkBarcode.prototype.startSoftRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EmdkBarcode.startSoftRead', arguments);
	exec(successCallback, errorCallback, "EmdkBarcode", "startSoftRead", []);
};

EmdkBarcode.prototype.stopReading = function () {
	exec(function () {}, function () {}, "EmdkBarcode", "stopReading", []);
};

module.exports = new EmdkBarcode();
