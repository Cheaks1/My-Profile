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
        let counter = 0;
        let countour = setInterval(() => {
          counter++;
          cent.innerHTML = counter + "%";
          if (counter == data) {
            clearInterval(countour);
          }
        }, 2500 / data);
      });

      progress.forEach((one) => {
        let counter = 0;

        let countour = setInterval(() => {
          counter++;
          if (counter < (one.dataset.percent * 360) / 100) {
            one.style.cssText = `background:conic-gradient(#6610f2 ${counter}deg, #dde2e6  0deg);`;
          } else {
            clearInterval(countour);
          }
        }, 1000 / ((one.dataset.percent * 360) / 100));
      });
    }
    starter = true;
  } else {
    starter = false;
    counter = 0;
  }
};

////////////////////////////////////
//text section//

let textContainer = document.querySelector(".skills_info");
let logoContainer = document.querySelectorAll(".logo_container");
let logoDescription = document.querySelectorAll(".logo_description");
let skillsHeader = document.querySelector(".skills_info h2");
logoContainer.forEach((logo) => {
  logo.onclick = function () {
    let logoName = this.children[2].textContent;

    for (let i = 0; i < logoDescription.length; i++) {
      logoDescription[i].style.display = "none";
      logoDescription[i].style.opacity = "0";
      skillsHeader.style.display = "none";
      if (logoDescription[i].classList.contains(logoName)) {
        logoDescription[i].style.display = "block";
        logoDescription[i].style.opacity = "1";
      }
    }

    //
  };
});
