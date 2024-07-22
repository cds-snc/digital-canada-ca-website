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

  /**
   * Contact Form Submit
   */

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    setTimeout(() => {
      var valid = true,
        errors = [];

      $("#contactForm .validate-required").each(function () {
        var $this = $(this);
        if ($this[0].errorMessage) {
          errors.push($this[0]);
          valid = false;
        }
      });

      if (!valid) {
        errors[0].focus();
        return false;
      }

      /**
       * Disable button to prevent double-submitting
       */
      $("#submit-btn").toggleClass("loading");
      $("#submit-btn").toggleClass("inactive");
      $("#submit-btn").attr("disabled", true);
      $("#job-submit-btn").attr("disabled", true);

      var formData = new FormData($("#contactForm")[0]);
      var pageLanguage = $("html").attr("lang");
      var endpoint =
        "https://944yirpts7.execute-api.ca-central-1.amazonaws.com/Production/lever";

      $.ajax({
        type: "POST",
        url: endpoint,
        data: formData,
        contentType: false,
        processData: false,
        complete: function (r) {
          console.log(r.responseText);
        },
        success: function () {
          if (pageLanguage == "en") {
            window.location.href = "/thank-you/";
          } else {
            window.location.href = "/merci/";
          }
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log("Error", textStatus);
          console.log("Error", errorThrown);
          if (pageLanguage == "en") {
            window.location.href = "/error/";
          } else {
            window.location.href = "/erreur/";
          }
        },
      });
    }, 200);
  });
});
