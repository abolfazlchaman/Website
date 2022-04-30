console.clear();
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

/* const iconify =$.getElementsByClassName("iconify");
    function iconifyHandler() {
        for (let i = 0; i < iconify.length; i+=1) {

            if (!themeFlag) {
                iconify[i].classList.replace("red","blue");
            } else {
                iconify[i].classList.replace("blue","red");
            }
        }
    }

const linkTags =$.getElementsByTagName("a");
    function linkTagsHandler() {
        for (let i = 0; i < linkTags.length; i+=1) {

                linkTags[i].classList.toggle("txtwhite","#txtdark");

        }
    } */

/* const sections = $.getElementsByTagName("section"),
      footer   = $.getElementsByTagName("footer"),
      footerName=$.getElementById("name");
    function sectionsHandler() {
        for (let i = 0; i < sections.length; i++) {
            themeFlag?
            sections[i].classList.replace("light","dark"):
            sections[i].classList.replace("dark","light")        
        }
        themeFlag?
        footer[0].classList.replace("light","dark"):
        footer[0].classList.replace("dark","light")

        themeFlag?
        footerName.classList.replace("blue","red"):
        footerName.classList.replace("red","blue")

    } */

/*     function skillsHandler() {
        if (themeFlag) {
        let   blueBg = $.getElementsByClassName("blueBg");
            for (cntr=0;cntr<=4;cntr++) {
                for (let i = 0; i < blueBg.length; i++) {
                    blueBg[0].classList.replace("blueBg","redBg")
                } 
            }
        } else {
        let   redBg = $.getElementsByClassName("redBg");
            for (cntr=0;cntr<=4;cntr++) {
                for (let i = 0; i < redBg.length; i++) {
                    redBg[0].classList.replace("redBg","blueBg"); 
                } 
            }
        }

    }  */

/* const navArrow = $.getElementById("nav__arrow")
    function navArrowHandler() {
        themeFlag?
        navArrow.classList.replace("dark","light"):
        navArrow.classList.replace("light","dark");
    } */

/* const navBtn= navArrow.children;
    function navBtnHandler() {
    if (themeFlag) {
                for (let i = 0; i < navBtn.length; i++) {
                    navBtn[i].classList.replace("indentWhite","indentdark")
                    navBtn[i].classList.replace("light","dark")
                    // navBtn[i].classList.add("txtwhite")
                    // navBtn[i].classList.replace("txtdark","txtwhite")

                } 
        } else {
                for (let i = 0; i < navBtn.length; i++) {
                    navBtn[i].classList.replace("indentdark","indentWhite")
                    // navBtn[i].classList.replace("txtwhite","txtdark")
                } 
                }
    } */

$.getElementsByClassName("theme__btn__on")[0].addEventListener(
  "click",
  function () {
    if (themeFlag) {
      //Dark Theme
      themeFlag = false;

      $.getElementById("stylesheet").setAttribute("href", "styles/white.css");
    } else {
      //Light Theme
      themeFlag = true;

      $.getElementById("stylesheet").setAttribute("href", "styles/dark.css");
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
  } else if (xScrollOffset >= contactSection.offsetTop) {
    navDentHandler();
    childs[5].classList.replace("btn__indent", "btn__outdent");
    // window.location.href = urL.concat("#steps")
  }
}

let childs = $.getElementById("nav__arrow").children;
for (let i = 0; i < childs.length; i++) {
  childs[i].addEventListener("click", function () {
    childs[i].classList.replace("btn__outdent", "btn__indent");

    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.replace("btn__outdent", "btn__indent");
    }
    childs[i].classList.replace("btn__indent", "btn__outdent");
  });
}
// console.log(homeSection.offsetTop)
// console.log(homeSection.offsetHeight)
// console.log(aboutMeSection.offsetTop)

// console.log(aboutMeSection.scrollHeight)
// console.log(skillsSection.offsetTop)

// console.log(skillsSection.scrollHeight)
// console.log(services.scrollHeight)
// console.log(worksSection.scrollHeight)
// console.log(stepsSection.scrollHeight)
// console.log(contactSection.scrollHeight)

$.addEventListener("scroll", function name() {
  scrollHandler();
});

//loader here
window.addEventListener('load', function() {
    console.log('All assets are loaded')
})