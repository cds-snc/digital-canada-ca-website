Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

$(document).ready(function () {
  // Add target=_blank to external links
  // Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
  $("#wb-cont a[href^='http://']").attr("target", "_blank");
  $("#wb-cont a[href^='https://']").attr("target", "_blank");
  let footer = document.querySelector("#footer-id");
  footer.addEventListener("gcdsClick", function (e) {
    footer.setAttribute(
      "data-gc-analytics-navigation",
      `footer:Canadian Digital Service: ${e.detail}`
    );
  });
});
