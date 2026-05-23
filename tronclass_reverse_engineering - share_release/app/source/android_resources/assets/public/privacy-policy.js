/* eslint-disable no-var */
(function () {
  var currentTimeStamp = new Date().getTime();
  var containerDomStr =
    '<div class="privacy-policy-container">\n      <div class="privacy-policy-header">个人信息保护指引</div>\n      <div class="privacy-policy-content" id="privacyPolicyContent">\n        欢迎使用畅课（TronClass），我们将通过 <span id="privacyPolicyLink" class="content-link">《隐私政策》</span>、\n        <span id="userAgreementLink" class="content-link">《用户协议》</span>与<span id="childrenPrivacyPolicyLink" class="content-link">《未成年人隐私保护声明》</span>，帮助您了解我们提供的服务以及收集、处理个人信息的方式。\n        点击“同意”按钮代表您已同意前述协议及以下约定：<br />\n        1.在使用时，我们可能会申请系统设备权限收集 <b><i>国际移动设备识别码</i></b>，以及收集其他设备信息如 <b><i>网络设备硬件地址</i></b>、<b><i>ANDROID\n            ID</i></b>、<b><i>日志信息</i></b>，用于识别设备并进行信息推送；申请<b><i>存储</i></b> 权限，用于下载及缓存相关文件。<br />\n        2.我们可能会申请 <b><i>位置</i></b> 权限，用于“雷达点名”活动时和当前区域的匹配检测。<br />\n        3.上述权限以及 <b><i>摄像头</i></b>、<b><i>麦克风</i></b>、<b><i>相册</i></b>、<b><i>存储</i></b>、<b><i>GPS</i></b>\n        等敏感权限均不会默认或强制开启收集信息。<br />\n        4.<b><i>自启动</i></b>行为说明<br />\n        <div class="privacy-policy-sub-content">\n        4.1 为确保本应用处于关闭或后台运行状态下可正常接收到客户端推送的广播信息，本应用须使用<b><i>自启动</i></b>能力，将存在一定频率通过系统发送广播唤醒本应用自启动或关联启动行为，是因实现功能及服务所必要的。<br />\n        </div>\n        <div class="privacy-policy-sub-content">\n        4.2 当您打开畅课（TronClass）内容类推送消息，在征得您的明确同意后，会跳转畅课（TronClass）打开相关内容。在未征得您同意的情况下，则不会有关联启动。<br />\n        </div>\n        <div class="privacy-policy-sub-content">\n        4.3 当您打开畅课（TronClass）内部下载的文件后，会关联启动第三方 APP。<br /></div>\n        5. 我们将按照中华人民共和国认可效力的法律、法规、国际规则或国际惯例予以存储。<br />\n        6. 为了保护您的个人信息安全，我们将努力采取各种符合行业标准的安全措施来保护您的个人信息以最大程度降低您的个人信息被毁损、盗用、泄露、非授权访问、使用、披露和更改的风险。<br />\n        7. 我们的产品、网站和服务主要面向学校/机构教师身份用户、管理员身份用户和学生身份用户，均以成年人为主。但是，我们非常重视对未成年人个人信息的保护，严格按照相关法律规定处理未成年人个人信息。<br />\n        <br />\n        <p>开发者：西安智园软件开发管理有限公司</p>\n        <p>联系方式：029-81118068</p>\n        <p>联系地址：陕西省西安市长安区韦曲街道神舟大道秦创原航天新经济科技园3号楼10层</p>\n      </div>\n      <div class="privacy-policy-footer">\n        <button id="privacyPolicyModalAgree">同意</button>\n        <button id="privacyPolicyModalDisagree">不同意</button>\n      </div>\n    </div>';

  var privacyPolicyModal = document.getElementById("privacyPolicyModal");

  function _startApp() {
    document.body.removeChild(privacyPolicyModal);
    window.TronClassAPPStart();
    localStorage.setItem("_cap_isShowPrivacyAgreementModal", "false");
  }

  function startApp() {
    if (window.device && window.device.getUuid) {
      window.device.getUuid(_startApp, _startApp);
    } else {
      _startApp();
    }
  }

  function exitApp() {
    if (window.Capacitor.platform === "ios") {
      window.Capacitor.Plugins.ExitAppIosPlugin.killApp();
    } else if (window.Capacitor.platform === "android") {
      window.Capacitor.Plugins.App.exitApp();
    } else {
      startApp();
    }
  }

  function insertPolicyContainerDom(content) {
    privacyPolicyModal.innerHTML = content || containerDomStr;
  }

  function fetchOnlinePolicyContent() {
    fetch(
      "https://mobile-download.tronclass.com.cn/summary-privacy-policy-zh-CN.md?v=" +
        currentTimeStamp,
    )
      .then(function (response) {
        if (response.status === 200) {
          return response.text();
        } else {
          return "";
        }
      })
      .catch(function () {
        return "";
      })
      .then(function (content) {
        if (content) {
          removeDomEvent();
          renderContent(content);
        }
      });
  }

  const endpointMap = {
    "privacyPolicyLink": "privacy-policy",
    "userAgreementLink": "user-agreement",
    "childrenPrivacyPolicyLink": "children-privacy-policy",
  };

  function clickContent(evt) {
    if (evt.target && window.Capacitor.Plugins.Browser) {
      const endpoint = endpointMap[evt.target.id];
      if (endpoint) {
        window.Capacitor.Plugins.Browser.open({
          url:
            "https://mobile-download.tronclass.com.cn/policy-jump.html?endpoint=" +
            endpoint +
            "&language=zh-CN&v=" +
            currentTimeStamp,
        });
      }
    }
  }

  function agreePrivacyPolicy() {
    var privacyPolicyContentDiv = document.getElementById("privacyPolicyContent");
    privacyPolicyContentDiv.removeEventListener("click", clickContent);
    startApp();
  }

  function disagreePrivacyPolicy() {
    var privacyPolicyContentDiv = document.getElementById("privacyPolicyContent");
    privacyPolicyContentDiv.removeEventListener("click", clickContent);
    exitApp();
  }

  function removeDomEvent() {
    var agreeButton = document.getElementById("privacyPolicyModalAgree");
    var disagreeButton = document.getElementById("privacyPolicyModalDisagree");
    var privacyPolicyContentDiv = document.getElementById("privacyPolicyContent");

    agreeButton && agreeButton.removeEventListener("click", agreePrivacyPolicy);
    disagreeButton && disagreeButton.removeEventListener("click", disagreePrivacyPolicy);
    privacyPolicyContentDiv && privacyPolicyContentDiv.removeEventListener("click", clickContent);
  }

  function renderContent(content) {
    insertPolicyContainerDom(content);
    privacyPolicyModal.style["visibility"] = "visible";
    var agreeButton = document.getElementById("privacyPolicyModalAgree");
    var disagreeButton = document.getElementById("privacyPolicyModalDisagree");
    var privacyPolicyContentDiv = document.getElementById("privacyPolicyContent");

    agreeButton.addEventListener("click", agreePrivacyPolicy, {
      once: true,
    });
    disagreeButton.addEventListener("click", disagreePrivacyPolicy, {
      once: true,
    });
    privacyPolicyContentDiv.addEventListener("click", clickContent);
  }

  function showModal() {
    renderContent();
    window.Capacitor.Plugins.SplashScreen.hide();
    fetchOnlinePolicyContent();
  }

  window.document.body.addEventListener(
    "AppCodeLoaded",
    function () {
      window.APPRuntime.setAreaInfo();
      var showModalFlag = localStorage.getItem("_cap_isShowPrivacyAgreementModal") !== "false";

      if (
        !window.Capacitor ||
        !(window.Capacitor.platform === "ios" || window.Capacitor.platform === "android") ||
        !window.APPRuntime.IS_CN ||
        !showModalFlag ||
        window.APPRuntime.OFFLINE_MODE
      ) {
        startApp();
      } else {
        showModal();
      }
    },
    { once: true },
  );
})();
