//type writer

const originalText = document.getElementById("typewriterContent").innerText;
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    document.getElementById("typewriterContent").innerHTML = originalText.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();


//menu side menu
$(document).ready(function () {
  // Dropdown menu functionality
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  // Side bar open button
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  // Side bar close button
  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});

