//offline modal here
window.addEventListener('offline', (event) => {
  console.log("The network connection has been lost.");
});

//loader here
window.addEventListener("load", function () {
  scrollHandler();
});

//online modal here
window.addEventListener('online', (event) => {
console.log("You are now connected to the network.");
});

let themeFlag = false; //dark theme is off (by default)
const $ = document;

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
    $.getElementById("circleSource").setAttribute("srcset", "images/blackcircle.webp");
    circleImg.setAttribute("src", "images/blackcircle.png");
    hand[0].setAttribute("src", "images/blackhand.png");
    hand[1].setAttribute("src", "images/blackhand.png");
  } else {
    logo.classList.remove("nobrightness");
    lineImg.setAttribute("src", "images/line.png");
    lineImg2.setAttribute("src", "images/line.png");
    $.getElementById("circleSource").setAttribute("srcset", "images/circle.webp");
    circleImg.setAttribute("src", "images/circle.png");
    hand[0].setAttribute("src", "images/whitehand.png");
    hand[1].setAttribute("src", "images/whitehand.png");
  }
}

const seprator = $.getElementsByClassName("seprator"),
      sepratorSource = $.getElementsByClassName("sepratorSource");
function seperatorsHandler() {
  for (let i = 0; i < seprator.length; i += 1) {
    if (!themeFlag) {
      seprator[i].setAttribute("src", "images/blackseprator.png");
      sepratorSource[i].setAttribute("srcset", "images/blackseprator.webp");
      
    } else {
      seprator[i].setAttribute("src", "images/seprator.png");
      sepratorSource[i].setAttribute("srcset", "images/seprator.webp");

    }
    !themeFlag?
    sepratorSource[3].setAttribute("srcset",
    "images/blackseprator.webp"):
    sepratorSource[3].setAttribute("srcset",
    "images/seprator.webp");
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
  } else if (xScrollOffset <= aboutMeSection.offsetTop + 50) {
    navDentHandler();
    childs[1].classList.replace("btn__indent", "btn__outdent");
  } else if (xScrollOffset <= skillsSection.offsetTop + 50) {
    navDentHandler();
    childs[2].classList.replace("btn__indent", "btn__outdent");
  } else if (xScrollOffset <= servicesSection.offsetTop + 50) {
    navDentHandler();
    childs[3].classList.replace("btn__indent", "btn__outdent");
  } else if (xScrollOffset <= worksSection.offsetTop + 50) {
    navDentHandler();
    childs[4].classList.replace("btn__indent", "btn__outdent");
  } else if (xScrollOffset >= contactSection.offsetTop- 500) {
    navDentHandler();
    childs[5].classList.replace("btn__indent", "btn__outdent");
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
skillsContentHandler()

  });
}

let skillsContent = $.getElementsByClassName("skills__lang");
function skillsContentHandler() {
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].setAttribute("hidden","");
  }

  if (skillsBtn[0].classList.contains("btn__outdent")) {
    skillsContent[0].removeAttribute("hidden")
    skillsContent[1].removeAttribute("hidden")
  }
  if (skillsBtn[1].classList.contains("btn__outdent")) {
    skillsContent[2].removeAttribute("hidden")
  }
  if (skillsBtn[2].classList.contains("btn__outdent")) {
    skillsContent[3].removeAttribute("hidden")
  }
  if (skillsBtn[3].classList.contains("btn__outdent")) {
    skillsContent[4].removeAttribute("hidden")
    skillsContent[5].removeAttribute("hidden")
  }
  if (skillsBtn[4].classList.contains("btn__outdent")) {
    skillsContent[6].removeAttribute("hidden")
  }
}

const workExp= $.getElementsByClassName("workexp"),
      workBtn = $.getElementsByClassName("workbtn");
workBtn[0].addEventListener(("touchstart","click"), function () {
  workBtnHandler()
  workBtn[0].classList.add("btn__outdent")
  workExp[2].setAttribute("hidden","");
})
workBtn[1].addEventListener(("touchstart","click"), function () {
  workBtnHandler()
  workBtn[1].classList.add("btn__outdent")
  workExp[0].setAttribute("hidden","");
  workExp[1].setAttribute("hidden","");
})
function workBtnHandler() {
    workBtn[0].classList.remove("btn__outdent");
    workBtn[0].classList.add("btn__indent");
    workExp[0].removeAttribute("hidden");
    workBtn[1].classList.remove("btn__outdent");
    workBtn[1].classList.add("btn__indent");
    workExp[1].removeAttribute("hidden");
    workExp[2].removeAttribute("hidden");

}

$.addEventListener("scroll", function name() {
  behavior: 'smooth';
  scrollHandler();
});
