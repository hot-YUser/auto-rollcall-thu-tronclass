cordova.define("@wisdomgarden/openwith.openwith", function(require, exports, module) { 
function initOpenwithPlugin (root) {
  'use strict'

  // imports
  // var cordova = require('cordova')

  var PLUGIN_NAME = 'OpenWithPlugin'

  // the returned object
  var openwith = {}

  //
  // exported constants
  //

  // logging levels
  var DEBUG = openwith.DEBUG = 0
  var INFO = openwith.INFO = 10
  var WARN = openwith.WARN = 20
  var ERROR = openwith.ERROR = 30

  // actions
  openwith.SEND = 'SEND'
  openwith.VIEW = 'VIEW'

  //
  // state variables
  //

  // default verbosity level is to show errors only
  var verbosity

  // the logger function (defaults to console.log)
  var logger

  // the cordova object (defaults to global one)
  var cordova

  // has init() been called or not already
  var initCalled

  // make sure a number is displayed with 2 digits
  var twoDigits = function (n) {
    return n < 10
      ? '0' + n
      : '' + n
  }

  // format a date for display
  var formatDate = function (now) {
    var date = now ? new Date(now) : new Date()
    var d = [date.getMonth() + 1, date.getDate()].map(twoDigits)
    var t = [date.getHours(), date.getMinutes(), date.getSeconds()].map(twoDigits)
    return d.join('-') + ' ' + t.join(':')
  }

  // format verbosity level for display
  var formatVerbosity = function (level) {
    if (level <= DEBUG) return 'D'
    if (level <= INFO) return 'I'
    if (level <= WARN) return 'W'
    return 'E'
  }

  // display a log in the console only if the level is higher than current verbosity
  var log = function (level, message) {
    if (level >= verbosity) {
      logger(formatDate() + ' ' + formatVerbosity(level) + ' openwith: ' + message)
    }
  }

  // reset the state to default
  openwith.reset = function () {
    log(DEBUG, 'reset')
    verbosity = openwith.INFO
    logger = console.log
    cordova = root.cordova
    initCalled = false
  }

  // perform the initial reset
  openwith.reset()

  // change the logger function
  openwith.setLogger = function (value) {
    logger = value
  }

  // change the cordova object (mostly for testing)
  openwith.setCordova = function (value) {
    cordova = value
  }

  // change the verbosity level
  openwith.setVerbosity = function (value) {
    log(DEBUG, 'setVerbosity()')
    if (value !== DEBUG && value !== INFO && value !== WARN && value !== ERROR) {
      throw new Error('invalid verbosity level')
    }
    verbosity = value
    cordova.exec(null, null, PLUGIN_NAME, 'setVerbosity', [value])
  }

  // retrieve the verbosity level
  openwith.getVerbosity = function () {
    log(DEBUG, 'getVerbosity()')
    return verbosity
  }

  // a simple function to test that the plugin is correctly installed
  openwith.about = function () {
    log(DEBUG, 'about()')
    return 'cordova-plugin-openwith, (c) 2017 fovea.cc'
  }

  openwith.exit = function () {
    log(DEBUG, 'exit()')
    cordova.exec(null, null, PLUGIN_NAME, 'exit', [])
  }

  // Initialize the native side at startup
  openwith.init = function (successCallback, errorCallback) {
    log(DEBUG, 'init()')
    if (initCalled) {
      throw new Error('init should only be called once')
    }
    initCalled = true

    // callbacks have to be functions
    if (successCallback && typeof successCallback !== 'function') {
      throw new Error('invalid success callback')
    }
    if (errorCallback && typeof errorCallback !== 'function') {
      throw new Error('invalid error callback')
    }

    var initSuccess = function () {
      log(DEBUG, 'initSuccess()')
      if (successCallback) successCallback()
    }
    var initError = function () {
      log(DEBUG, 'initError()')
      if (errorCallback) errorCallback()
    }

    cordova.exec(initSuccess, initError, PLUGIN_NAME, 'init', [])
  }

  openwith.fetchSharedData = function () {
    return new Promise((resolve) => {
      if (!initCalled) {
        console.error('should be inited')
        resolve(null)
        return
      }

      var initSuccess = function (data) {
        resolve(data)
      }
      var initError = function () {
        resolve(null)
      }
      cordova.exec(initSuccess, initError, PLUGIN_NAME, 'fetchSharedData', [])
    })
  }

  return openwith
}

// Export the plugin object
var openwith = initOpenwithPlugin(this)
module.exports = openwith
this.plugins = this.plugins || {}
this.plugins.openwith = openwith
});