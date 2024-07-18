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

/**
 * Email validation (allows unicode addresses)
 * @param $email
 * @returns {boolean}
 */
function validateEmail($email) {
  var emailReg =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailReg.test($email);
}

$(document).ready(function () {
  // Add target=_blank to external links
  // Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
  $("#wb-cont a[href^='http://']").attr("target", "_blank");
  $("#wb-cont a[href^='https://']").attr("target", "_blank");
  let footer = document.querySelector("#footer-id")
  footer.addEventListener('gcdsClick', function (e) {
    footer.setAttribute("data-gc-analytics-navigation", `footer:Canadian Digital Service: ${e.detail}`)
  })
  /**
   * Word counter
   */
  var maxWords = 300,
    wordCount;

  $("#contactForm #body").keyup(function (event) {
    wordCount = 0;

    if ($("#contactForm #body").val()) {
      wordCount = $("#contactForm #body").val().split(/[\s]+/).length;
    }

    if (wordCount > maxWords) {
      $("#contactForm #word-count-message").addClass("error-message");
    } else {
      $("#contactForm #word-count-message").removeClass("error-message");
    }

    wordsLeft = maxWords - wordCount;

    $("#contactForm #word-count").html(wordsLeft);
  });

  /**
   * File upload
   */
  $("#contactForm #resume").on("change", function (event) {
    var file = $("#contactForm #resume")[0].files[0].name;
    $("#contactForm #pdf-format-preferred").html(file);
  });

  /**
   * Contact Form Submit
   */
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    /**
     * Disable button to prevent double-submitting
     */
    $("#submit-btn").toggleClass("loading");
    $("#submit-btn").toggleClass("inactive");
    $("#submit-btn").attr("disabled", true);
    $("#job-submit-btn").attr("disabled", true);
      

    setTimeout(() => {
      var formData = new FormData($("#contactForm")[0]);
      var theForm = document.getElementById("contactForm");

      /**
       * Form Validation
       */
      var valid = true;

      let formChildren = theForm.children;

      for (let e = 0; e < formChildren.length; e++) {
        if (formChildren[e].errorMessage) {
          valid = false;
        }
      }
  
      if (valid) {
        /**
         * Collect data for submitting
         */
        var formData = new FormData(theForm);
        var pageLanguage = $("html").attr("lang");
    
        // for (const pair of formData.entries()) {
        //   console.log(pair[0], pair[1])
        // }
    
        var endpoint =
          "https://dowr6jfsw2.execute-api.ca-central-1.amazonaws.com/production/lever";
    
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
      } else {
        /**
         * Disable button to prevent double-submitting
         */
        $("#submit-btn").toggleClass("loading");
        $("#submit-btn").toggleClass("inactive");
        $("#submit-btn").attr("disabled", false);
        $("#job-submit-btn").attr("disabled", false);
      }
    }, 200);
  });

  /**
   * Check if there is a validation error to be cleared
   */
  $("#contactForm .form-control").keyup(function (e) {
    var $this = $(this);

    if ($this.hasClass("validate-required") && $this.val()) {
      if ($this.hasClass("validate-maxwords")) {
        wordCount = $this.val().split(/[\s]+/).length;

        if (wordCount <= maxWords) {
          $this.removeClass("error");
          $this.closest(".form-group").removeClass("error");
          $this.siblings(".error-message").hide();
          $this.attr("aria-invalid", "false");
        }
      } else if ($this.hasClass("validate-email")) {
        if (validateEmail($this.val())) {
          $this.removeClass("error");
          $this.closest(".form-group").removeClass("error");
          $this.siblings(".error-message").hide();
          $this.attr("aria-invalid", "false");
        }
      } else {
        $this.removeClass("error");
        $this.closest(".form-group").removeClass("error");
        $this.siblings(".error-message").hide();
        $this.attr("aria-invalid", "false");
      }
    }
  });
});