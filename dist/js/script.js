let darkTheme=document.querySelector(".dark"),scroller=(whiteTheme=document.querySelector(".light"),themeContainer=document.querySelector(".theme_icons"),whiteTheme.onclick=function(){document.body.className="light_theme",this.style.display="none",darkTheme.style.display="block"},darkTheme.onclick=function(){document.body.className="dark_theme",this.style.display="none",whiteTheme.style.display="block"},document.querySelector(".scroller")),allImg=(scroller.onclick=function(){window.scrollTo(0,969)},document.querySelectorAll("img"));console.log(allImg),allImg.forEach(function(e){e.setAttribute("alt","cheaks portfolio")});var controller=new ScrollMagic.Controller;let animeArr=[".img_container ",".text_container"];var scene=new ScrollMagic.Scene({triggerElement:".img_container , .text_container ,.navList"}).setClassToggle(".img_container , .text_container,.navList","show").addTo(controller);let navList=document.querySelector(".navList"),aboutSection=document.querySelector(".about");window.onscroll=function(){469<this.scrollX?navList.classlist.add("show"):navList.classlist.remove("show")};