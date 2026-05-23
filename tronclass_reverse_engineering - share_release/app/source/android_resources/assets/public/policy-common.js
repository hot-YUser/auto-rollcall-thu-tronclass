/* eslint-disable no-var */
/* eslint-disable prefer-const */
function wgGetUrlParams() {
  return location.search
    .substring(1, location.search.length)
    .split("&")
    .filter(function (pair) {
      return pair.length;
    })
    .map(function (pair) {
      return pair.split("=");
    })
    .reduce(function (result, pair) {
      result[pair[0]] = pair[1];
      return result;
    }, {});
}

function renderContent(options) {
  // infoFile,
  // contentFile,
  // showInfo
  // tagId

  if (options.showInfo === void 0) {
    options.showInfo = true;
  }

  if (!options.tagId) {
    options.tagId = "content";
  }

  var params = wgGetUrlParams();
  var specifiedLanguage = params["language"];

  var content = "";
  var info = null;
  var i18n = null;

  var language = specifiedLanguage || window.navigator.language;

  function parseLanguage() {
    if (language.startsWith("zh-CN")) {
      language = "zh-CN";
    } else if (language.startsWith("en")) {
      language = "en";
    } else if (language.startsWith("th")) {
      language = "en";
    } else {
      language = "zh-TW";
    }
  }

  function render() {
    if ((!options.infoFile || !options.showInfo || info) && content) {
      var header = "";
      var footer = "";

      if (options.infoFile && options.showInfo) {
        header = "# " + i18n["title"];
        header += "\n\n";

        header +=
          i18n["effectiveTime"] +
          new Date(info["updateInfo"]["effectiveTime"]).toLocaleDateString();
        header += "\n";
        header +=
          i18n["updateTime"] + new Date(info["updateInfo"]["updateTime"]).toLocaleDateString();

        header += "\n\n\n";

        footer = "\n\n\n";
        footer += i18n["developer"] + i18n["developerName"];
      }

      content = header + content + footer;

      if (window.marked) {
        var renderer = {
          link(href, title, text) {
            if (
              href === "privacy-policy.html" ||
              href === "user-agreement.html" ||
              href === "children-privacy-policy.html"
            ) {
              href = href + "?language=" + language;
            }

            var hrefAttribute = href ? ' href="' + href + '" ' : "";
            var titleAttribute = title ? ' title="' + title + '" ' : "";

            return "<a" + hrefAttribute + titleAttribute + ">" + text + "</a>";
          },
        };
        window.marked.use({ renderer });
        content = window.marked.parse(content);
      }
      document.getElementById(options.tagId).innerHTML = content;
    }
  }

  parseLanguage();

  options.infoFile &&
    fetch(options.infoFile + ".json?v=" + new Date().getTime())
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        info = json;
        i18n = json["i18n"][language];
        document.title = i18n["title"];
        render();
      })
      .catch(function () {
        console.log("fetch info file error");
      });

  options.contentFile &&
    fetch(options.contentFile + "-" + language + ".md?v=" + new Date().getTime())
      .then(function (response) {
        if (response.status === 200) {
          return response.text();
        } else {
          return " ";
        }
      })
      .then(function (_content) {
        content = _content;
        render();
      })
      .catch(function () {
        content = " ";
      });
}

window.renderContent = renderContent;
