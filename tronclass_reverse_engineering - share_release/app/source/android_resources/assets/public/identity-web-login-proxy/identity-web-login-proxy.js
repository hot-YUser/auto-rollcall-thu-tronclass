function getUrlParams() {
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

function paramsToUrl(obj, encode = false) {
  return Object.keys(obj)
    .map(function (key) {
      return key + "=" + (encode ? encodeURIComponent(obj[key]) : obj[key]);
    })
    .join("&");
}

function getReidrectUrl(org) {
  let pathName = window.location.pathname;
  const indexOfPath = pathName.lastIndexOf("/");

  pathName = pathName.slice(0, indexOfPath + 1);

  const redirectUrl =
    window.location.origin +
    pathName +
    "identity-web-login-proxy-callback.html?" +
    paramsToUrl({ org: encodeURIComponent(JSON.stringify(org)) }, true);

  return redirectUrl;
}

function upperFirstvarter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getIdentityConfig(org, targetPlatform) {
  if (!org) {
    return null;
  }
  const platformConfigName = "identityConfigH5" + upperFirstvarter(targetPlatform);
  const config = org[platformConfigName]
    ? org[platformConfigName]
    : org["identityConfigH5"] || org["identityConfig"];

  return config;
}

function getInfoFromApp() {
  //  input org, platform
  const params = getUrlParams();

  console.log(params);
  let org = null;

  try {
    org = JSON.parse(decodeURIComponent(params["org"]));
  } catch {
    org = null;
  }

  const platform = org.platform || params["platform"] || "web";

  org.platform = platform;

  return { org, platform, code: params["code"] };
}

function getIdentityTokenUrl(payload) {
  if (payload.org?.deliveryOrg === "nju") {
    return `${payload.org.apiUrl}/api/oidc-token?org_id=${payload.org?.id}`;
  }

  const config = payload.config || (payload.org ? getIdentityConfig(payload.org) : null);

  if (!config) {
    return null;
  }

  return `${config["auth-server-url"]}/realms/${encodeURIComponent(
    config.realm,
  )}/protocol/openid-connect/token`;
}

const identityLoginProxyUtils = {
  getUrlParams,
  paramsToUrl,
  getReidrectUrl,
  getIdentityConfig,
  getInfoFromApp,
  getIdentityTokenUrl,
};

window.identityLoginProxyUtils = identityLoginProxyUtils;
