//type writer

  const originalText = document.getElementById("typewriterContent").innerText.trim();
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    const contentElement = document.getElementById("typewriterContent");

    if (!isDeleting && index <= originalText.length) {
      contentElement.innerHTML = originalText.substring(0, index);
      index++;
      setTimeout(typeWriter, 100);
    } else if (isDeleting && index >= 0) {
      contentElement.innerHTML = originalText.substring(0, index);
      index--;
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeWriter, 1000); 
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

$(".skills-slider").slick({
  dots: true,
  arrow: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 556,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});


  function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src;
    modal.classList.remove("hidden");
  }


  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
      document.getElementById("modalImage").src = "";
    }
  });



window.addEventListener('load', function () {
    const loaderWrap = document.querySelector('.loader-wrap');
    document.body.classList.remove('loading'); // allow scroll again

    if (loaderWrap) {
        loaderWrap.classList.add('hide');
        setTimeout(() => {
            loaderWrap.style.display = 'none';
        }, 1000);
    }
});

document.querySelector('.preloader-close').addEventListener('click', function () {
    const loaderWrap = document.querySelector('.loader-wrap');
    document.body.classList.remove('loading'); // allow scroll again

    loaderWrap.classList.add('hide');
    setTimeout(() => {
        loaderWrap.style.display = 'none';
    }, 1000);
});



