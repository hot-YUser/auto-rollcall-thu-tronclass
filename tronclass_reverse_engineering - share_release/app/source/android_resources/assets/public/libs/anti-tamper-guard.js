(function (global) {
  var SUSPICIOUS_EVENTS = [
    "VUE_DETECTION_RESULT",
    "VUE_ROUTER_ANALYSIS_RESULT",
    "VUE_ROUTER_ANALYSIS_ERROR",
  ];

  function isSuspicious(event) {
    if (!event || !event.data) return false;

    var type = event.data.type;
    if (!type) return false;

    return event.origin === global.location.origin && SUSPICIOUS_EVENTS.indexOf(type) !== -1;
  }

  function onMessage(event) {
    if (isSuspicious(event)) {
      alert(
        "检测到第三方脚本正在尝试干扰当前页面的正常运行，已阻止此操作，为保障安全，请刷新页面！",
      );
      global.location.reload();
    }
  }

  global.addEventListener("message", onMessage);
})(window);
