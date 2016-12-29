var argscheck = require('cordova/argscheck'),
	channel = require('cordova/channel'),
	utils = require('cordova/utils'),
	exec = require('cordova/exec'),
	cordova = require('cordova');

channel.createSticky('onEnterpriseBarcodeReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onEnterpriseBarcodeReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function EnterpriseBarcode () {
	this.available = false;
	var me = this;

	channel.onCordovaReady.subscribe(function () {
		exec(function (scannersObj) {
			me.available = true;
			me.scanners = scannersObj.scanners;
			channel.onEnterpriseBarcodeReady.fire();
		}, function () {
			me.available = false;
		}, "EnterpriseBarcode", "init", []);
	});
}

EnterpriseBarcode.prototype.scanners = [];

EnterpriseBarcode.prototype.startHardRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EnterpriseBarcode.startHardRead', arguments);
	exec(successCallback, errorCallback, "EnterpriseBarcode", "startHardRead", []);
};

EnterpriseBarcode.prototype.startSoftRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EnterpriseBarcode.startSoftRead', arguments);
	exec(successCallback, errorCallback, "EnterpriseBarcode", "startSoftRead", []);
};

EnterpriseBarcode.prototype.stopReading = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EnterpriseBarcode.stopReading', arguments);
	exec(successCallback, errorCallback, "EnterpriseBarcode", "stopReading", []);
};

module.exports = new EnterpriseBarcode();
