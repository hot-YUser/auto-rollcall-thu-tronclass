cordova.define("cordova-plugin-brightness.Brightness", function(require, exports, module) { 
'use strict';

var exec = require('cordova/exec');

exports.getBrightness = function( success, error) {
  exec(success, error, 'Brightness', 'getBrightness', []);
};

exports.setBrightness = function(value, success, error) {
  exec(success, error, 'Brightness', 'setBrightness', [value]);
};

exports.setKeepScreenOn = function(value, success, error) {
  exec(success, error, 'Brightness', 'setKeepScreenOn', [value]);
};
});