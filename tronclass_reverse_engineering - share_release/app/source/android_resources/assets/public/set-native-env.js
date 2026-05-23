(function() {
  if (!window.APPRuntime) {
    return;
  }

  window.APPRuntime.BUILD_FOR_GP = window.navigator.userAgent.search("TronClass/googleplay") !== -1;
  console.log("use native variable BUILD_FOR_GP: " + window.APPRuntime.BUILD_FOR_GP);
})();
