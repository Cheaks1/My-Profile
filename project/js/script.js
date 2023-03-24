let darkTheme = document.querySelector(".dark");
whiteTheme = document.querySelector(".light");
themeContainer = document.querySelector(".theme_icons");
root = document.documentElement;

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

window.onscroll = function() {
    console.log(scrollY);
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
});