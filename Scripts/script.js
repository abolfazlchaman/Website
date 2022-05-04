//offline modal here
window.addEventListener('offline', (event) => {
  console.log("The network connection has been lost.");
});

//loader here
window.addEventListener("load", function () {
  console.log("LOADED ALL ASSETS")
});

//online modal here
window.addEventListener('online', (event) => {
console.log("You are now connected to the network.");
});

const $ = document,
  _id = $.getElementById,
  _tg = $.getElementsByTagName;

let themeFlag = false; //dark theme is off (by default)

const lineImg = $.getElementById("line"),
  lineImg2 = $.getElementById("line2"),
  circleImg = $.getElementById("circle"),
  logo = $.getElementsByClassName("logo")[0],
  hand = $.getElementsByClassName("hand");
function picsHandler() {
  if (!themeFlag) {
    logo.classList.add("nobrightness");
    lineImg.setAttribute("src", "images/blackline.png");
    lineImg2.setAttribute("src", "images/blackline.png");
    circleImg.setAttribute("src", "images/blackcircle.png");
    hand[0].setAttribute("src", "images/blackhand.png");
    hand[1].setAttribute("src", "images/blackhand.png");
  } else {
    logo.classList.remove("nobrightness");
    lineImg.setAttribute("src", "images/line.png");
    lineImg2.setAttribute("src", "images/line.png");
    circleImg.setAttribute("src", "images/circle.png");
    hand[0].setAttribute("src", "images/whitehand.png");
    hand[1].setAttribute("src", "images/whitehand.png");
  }
}

const seprator = $.getElementsByClassName("seprator");
function seperatorsHandler() {
  for (let i = 0; i < seprator.length; i += 1) {
    if (!themeFlag) {
      seprator[i].setAttribute("src", "images/blackseprator.png");
    } else {
      seprator[i].setAttribute("src", "images/seprator.png");
    }
  }
}

$.getElementsByClassName("theme__btn__on")[0].addEventListener(
  ("touchstart","click"),
  function () {

    if (themeFlag) {
      //Dark Theme
      themeFlag = false;
      $.getElementsByClassName("theme__btn__on")[0].classList.replace("justifyend","justifystart")
      $.getElementsByClassName("theme__btn__on")[0].classList.replace("btn__indent","btn__outdent")
      $.getElementById("stylesheet").setAttribute("href", "styles/white.css");
      $.getElementById("icon1").setAttribute("data-icon","bi:moon-stars")
      
    } else {
      //Light Theme
      themeFlag = true;
      $.getElementsByClassName("theme__btn__on")[0].classList.replace("justifystart","justifyend")
      $.getElementsByClassName("theme__btn__on")[0].classList.replace("btn__outdent","btn__indent")
      $.getElementById("stylesheet").setAttribute("href", "styles/dark.css");
      $.getElementById("icon1").setAttribute("data-icon","heroicons-outline:sun")
    }
    seperatorsHandler();
    picsHandler();
  }
);

function navDentHandler() {
  for (let i = 0; i < childs.length; i++) {
    childs[i].classList.replace("btn__outdent", "btn__indent");
  }
}

let xScrollOffset = +0;
const homeSection = $.getElementById("home"),
  aboutMeSection = $.getElementById("aboutme"),
  skillsSection = $.getElementById("skills"),
  servicesSection = $.getElementById("services"),
  worksSection = $.getElementById("works"),
  contactSection = $.getElementById("contact");
function scrollHandler() {
  xScrollOffset = +window.pageYOffset || +document.documentElement.scrollTop;

  if (xScrollOffset <= homeSection.offsetTop + 50) {
    navDentHandler();
    childs[0].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#home")
  } else if (xScrollOffset <= aboutMeSection.offsetTop + 50) {
    navDentHandler();
    childs[1].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#aboutMe")
  } else if (xScrollOffset <= skillsSection.offsetTop + 50) {
    navDentHandler();
    childs[2].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#skills")
  } else if (xScrollOffset <= servicesSection.offsetTop + 50) {
    navDentHandler();
    childs[3].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#services")
  } else if (xScrollOffset <= worksSection.offsetTop + 50) {
    navDentHandler();
    childs[4].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#works")
  } else if (xScrollOffset >= contactSection.offsetTop- 500) {
    navDentHandler();
    childs[5].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#steps")
  }
}

let childs = $.getElementById("nav__arrow").children;
for (let i = 0; i < childs.length; i++) {
  childs[i].addEventListener(("touchstart","click"), function () {
    childs[i].classList.replace("btn__outdent", "btn__indent");

    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.replace("btn__outdent", "btn__indent");
    }
    childs[i].classList.replace("btn__indent", "btn__outdent");
  });
}

let skillsBtn = $.getElementsByClassName("skills__btn");
for (let i = 0; i < skillsBtn.length; i++) {
  skillsBtn[i].addEventListener(("touchstart","click"), function () {
    // console.log(event.target.classList)
    skillsBtn[i].classList.replace("btn__outdent", "btn__indent");

    for (let i = 0; i < skillsBtn.length; i++) {
      skillsBtn[i].classList.replace("btn__outdent", "btn__indent");
    skillsBtn[i].classList.remove("blueBg");

    }
    skillsBtn[i].classList.replace("btn__indent", "btn__outdent");
    skillsBtn[i].classList.toggle("blueBg");
  });
}

$.addEventListener("scroll", function name() {
  scrollHandler();
});
