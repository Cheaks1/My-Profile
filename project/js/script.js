let darkTheme = document.querySelector(".dark");
whiteTheme = document.querySelector(".light");
themeContainer = document.querySelector(".theme_icons");

//change betwwen dark and white
whiteTheme.onclick = function () {
  document.body.className = "light_theme";
  this.style.display = "none";
  darkTheme.style.display = "block";
};
darkTheme.onclick = function () {
  document.body.className = "dark_theme";
  this.style.display = "none";
  whiteTheme.style.display = "block";
};

// scroll down btn
let scroller = document.querySelector(".scroller");
scroller.onclick = function () {
  window.scrollTo(0, 969);
};

//give all imgs alternate attr
let allImg = document.querySelectorAll("img");
console.log(allImg);
allImg.forEach(function (img) {
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

var rotate = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: ".percent,.progress",
})
  .setClassToggle(".percent,.progress", "prog")
  .addTo(rotate);

//show the nav bar
let navList = document.querySelector(".navList");
let aboutSection = document.querySelector(".about");
let percent = document.querySelectorAll(".percent");
let progress = document.querySelectorAll(".progress");
let starter = false;
let skills = document.querySelector(".skills");

window.onscroll = () => {
  if (window.scrollY >= skills.offsetTop - 100) {
    if (!starter) {
      percent.forEach((cent) => {
        let data = cent.dataset.percent;
        if (cent.classList.contains("prog") == true) {
          let counter = 0;
          let countour = setInterval(() => {
            counter++;
            cent.innerHTML = counter + "%";
            if (counter == data) {
              clearInterval(countour);
            }
          }, 2000 / data);
        }
      });

      progress.forEach((one) => {
        let counter = 0;

        if (one.classList.contains("prog") == true) {
          let countour = setInterval(() => {
            counter++;
            if (counter < (one.dataset.percent * 360) / 100) {
              one.style.cssText = `background:conic-gradient(#6610f2 ${counter}deg, #dde2e6  0deg);`;
            } else {
              clearInterval(countour);
            }
          }, 2000 / ((one.dataset.percent * 360) / 100));
        }
      });
    }
    starter = true;
  }
};
