function toggleNavbar() {
    const toggleButton = document.getElementById('toggleButton');
    const menuIcon = document.getElementById('menuIcon');

    toggleButton.addEventListener('click', function () {
        // Toggle class untuk mengubah ikon pada tombol toggle
        menuIcon.classList.toggle('menu-opened');

        // Mengubah sumber gambar berdasarkan status class 'menu-opened'
        if (menuIcon.classList.contains('menu-opened')) {
            menuIcon.src = 'images/asset/Category.svg'; // Ganti dengan sumber gambar ketika menu tertutup

        } else {
        menuIcon.src = 'images/asset/icon-close.svg'; // Ganti dengan sumber gambar ketika menu terbuka

        }
    });
}

function handlerScrollLogo() {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    }

    function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
        });
    });
    }
}

function handlerSlideImages() {
    var slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }

    // Add event listeners for next and previous buttons
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        plusSlides(-1);
    });

    nextButton.addEventListener('click', function() {
        plusSlides(1);
    });

    // Add event listeners for each image thumbnail
    var demoImgs = document.querySelectorAll('.demo');
    demoImgs.forEach(function(img, index) {
        img.addEventListener('click', function() {
            currentSlide(index);
        });
    });
}

// Panggil fungsi untuk mengatur slide gambar
handlerSlideImages();


function main() {
    toggleNavbar()
    handlerScrollLogo();
    handlerSlideImages();
}
window.addEventListener('load', main);
