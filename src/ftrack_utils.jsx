// :copyright: Copyright (c) 2023 ftrack

function loadStyleSheet(theme) {
  let head = document.getElementsByTagName("head")[0];
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = import.meta.env.BASE_URL + "style-" + theme + ".css";
  head.appendChild(link);
}

function defaultThumbnail(session) {
  return `${session.serverUrl}/img/thumbnail2.png`;
}

function isOverview() {
  const hash = new URLSearchParams(window.location.hash.substring(8));
  return hash.has("overview");
}

export { loadStyleSheet, defaultThumbnail, isOverview };
