// dark mode

const darkBtn = document.querySelector("#dark");
const navi = document.querySelector("nav");
const btnImg = document.querySelector("#dark img");
const navUl = document.querySelector("nav .dropdown-menu");
const lightDark = document.querySelectorAll(".bg-light, .bg-dark");
const lightDarkText = document.querySelectorAll(".text-light, .text-dark");
const lightDarkBorder = document.querySelectorAll(".border-light, .border-dark");

darkBtn.addEventListener('click', function () {

    for (let i = 0; i < lightDark.length; i++) {
        lightDark[i].classList.toggle('bg-dark');
        lightDark[i].classList.toggle('bg-light');
    }

    for (let i = 0; i < lightDarkText.length; i++) {
        lightDarkText[i].classList.toggle('text-light');
        lightDarkText[i].classList.toggle('text-dark');
    }

    for (let i = 0; i < lightDarkText.length; i++) {
        lightDarkBorder[i].classList.toggle('border-dark');
        lightDarkBorder[i].classList.toggle('border-light');
    }

    if (btnImg.getAttribute("src") === "on.png") {
        btnImg.setAttribute("src", "off.png");
    } else {
        btnImg.setAttribute("src", "on.png");
    }


})

// Fleche Scroll

jQuery(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scrollUp').css('right', '10px'); 
            } else {
                $('#scrollUp').removeAttr('style');
            }
        });
    });
});