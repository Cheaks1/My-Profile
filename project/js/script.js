let darkTheme = document.querySelector(".dark");
whiteTheme = document.querySelector(".light");
themeContainer = document.querySelector(".theme_icons");

//change betwwen dark and white
whiteTheme.onclick = function() {
    document.body.className = "light_theme";
    this.style.display = "none";
    darkTheme.style.display = "block";
};
darkTheme.onclick = function() {
    document.body.className = "dark_theme";
    this.style.display = "none";
    whiteTheme.style.display = "block";
};

// scroll down btn
let scroller = document.querySelector(".scroller");
scroller.onclick = function() {
    window.scrollTo(0, 969);
};

//give all imgs alternate attr
let allImg = document.querySelectorAll("img");
console.log(allImg);
allImg.forEach(function(img) {
    img.setAttribute("alt", "cheaks portfolio");
    img.setAttribute("loading", "lazy");
});

// Init ScrollMagic controller
var controller = new ScrollMagic.Controller();
let animeArr = [".img_container ", ".text_container"];

// Create a ScrollMagic scene for the element

var scene = new ScrollMagic.Scene({
        triggerElement: ".img_container , .text_container ,.navList",
    })
    .setClassToggle(".img_container , .text_container,.navList", "show")
    .addTo(controller);

//show the nav bar
let navList = document.querySelector(".navList");
let aboutSection = document.querySelector(".about");

// window.onscroll = function() {
//     if (this.scrollX > 469) {
//         navList.classlist.add("show");
//     } else {
//         navList.className = "";
//     }
// };