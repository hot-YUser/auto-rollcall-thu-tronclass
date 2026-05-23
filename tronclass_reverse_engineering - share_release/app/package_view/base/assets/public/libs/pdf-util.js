//修正移动端页面获取首页尾页异常
function fixCurrentPage() {
  if (!window.PDFViewerApplication) return;

  const viewerContainer = document.querySelector("#viewerContainer");
  const viewer = document.querySelector("#viewer");

  if (viewerContainer.scrollTop === 0 && PDFViewerApplication.page === 1) return;
  if (viewerContainer.scrollTop === 0) {
    PDFViewerApplication.page = 1;
  } else if (viewerContainer.clientHeight + viewerContainer.scrollTop >= viewer.clientHeight) {
    if (PDFViewerApplication.page !== PDFViewerApplication.pagesCount) {
      PDFViewerApplication.page = PDFViewerApplication.pagesCount;
    }
  }
}

// 根据url里面的page参数设置当前页
function beforeOpenFile() {
  var parseQueryString = function(query) {
    var parts = query.split("&");
    var params = Object.create(null);

    for (var i = 0, ii = parts.length; i < ii; ++i) {
      var param = parts[i].split("=");
      var key = param[0].toLowerCase();
      var value = param.length > 1 ? param[1] : null;
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }

    return params;
  };
  var params = parseQueryString(document.location.search.substring(1));
  if (params.page) {
    PDFViewerApplication.page = Number(params.page);
  }
}

// 显示当前页数
function showCurrentPage() {
  var self = this;
  self.showCurrentPageTimeout = null;
  self.showPage = function() {
    if (self.showCurrentPageTimeout) clearTimeout(self.showCurrentPageTimeout);
    var currentPageEl = document.querySelectorAll(".pdfCurrentPage");
    currentPageEl.forEach(function(el) {
      el.style.opacity = "1";
    });
    self.showCurrentPageTimeout = setTimeout(function() {
      currentPageEl.forEach(function(el) {
        el.style.opacity = "0";
      });
    }, 1500);
  };
}
