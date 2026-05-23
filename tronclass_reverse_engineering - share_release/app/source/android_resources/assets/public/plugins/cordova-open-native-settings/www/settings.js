cordova.define("cordova-open-native-settings.Settings", function(require, exports, module) { 
var NativeSettings = function() {
};

NativeSettings.open = function(setting, onsucess, onfail) {
	var settings = (typeof setting === 'string' || setting instanceof String) ? [setting] : setting;
	cordova.exec(onsucess, onfail, "NativeSettings", "open", settings);
};

module.exports = NativeSettings;
});