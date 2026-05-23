if (window.APPRuntime.ORG_NAME) {
  (function() {
    var MOBILE_USER_AGENT = /mobile|android|iphone|blackberry|webos|ipod|lge vx|midp|maemo|mmp|mobile|netfront|hiptop|nintendo DS|novarra|openweb|opera mobi|opera mini|palm|psp|phone|smartphone|symbian|up.browser|up.link|wap|windows ce/i;
    var IS_MOBILE = MOBILE_USER_AGENT.test(window.navigator.userAgent);

    if (!IS_MOBILE && window.APPRuntime.TC_HOST) {
      window.location.href = window.APPRuntime.TC_HOST;
      return true;
    }
    return false;
  })();
}
