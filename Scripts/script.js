console.clear()
const $ = document,
    _id = $.getElementById,
    _tg = $.getElementsByTagName;

let themeFlag= false; //dark theme is off (by default)


const   lineImg  =$.getElementById("line"),
        lineImg2 =$.getElementById("line2"),
        circleImg=$.getElementById("circle"),
        logo     =$.getElementsByClassName("logo")[0]    
    function picsHandler() {
        if (!themeFlag) {
            logo.classList.add("nobrightness")
            lineImg.setAttribute("src","images/blackline.png")
            lineImg2.setAttribute("src","images/blackline.png")
            circleImg.setAttribute("src","images/blackcircle.png")
        } 
        else {
            logo.classList.remove("nobrightness")
            lineImg.setAttribute("src","images/line.png")
            lineImg2.setAttribute("src","images/line.png")
            circleImg.setAttribute("src","images/circle.png")
        }
    }

const seprator =$.getElementsByClassName("seprator");
    function seperatorsHandler() {
        for (let i = 0; i < seprator.length; i+=1) {

            if (!themeFlag) {
                seprator[i].setAttribute("src","images/blackseprator.png");
            } else {
                seprator[i].setAttribute("src","images/seprator.png");
            }
        }
    }

const iconify =$.getElementsByClassName("iconify");
    function iconifyHandler() {
        for (let i = 0; i < iconify.length; i+=1) {

            if (!themeFlag) {
                iconify[i].classList.replace("red","blue");
            } else {
                iconify[i].classList.replace("blue","red");
            }
        }
    }

const sections = $.getElementsByTagName("section"),
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

    }

/* const   blueBg = $.getElementsByClassName("blueBg");
    function skillsHandler() {
        for (let i = 0; i < blueBg.length; i++) {
            console.log(i)
            console.log(blueBg)
            console.log(blueBg.length)
            themeFlag?
            blueBg[i].classList.replace("blueBg","redBg"):
            blueBg[i].classList.replace("redBg","blueBg")      
        }
    } */


const navArrow = $.getElementById("nav__arrow")
    function navArrowHandler() {
        themeFlag?
        navArrow.classList.replace("dark","light"):
        navArrow.classList.replace("light","dark");
    }

    // function whiteMode() {

    //     let dark =$.getElementsByClassName("dark"),
    //     light =$.getElementsByClassName("light");

    //     // console.log(dark.length)
    //     // console.log(light.length)

    //     for (let i = 0; i < dark.length; i+=1) {
    //          dark[i].classList.replace("dark","light");  
    //         console.log("i="+i)
    //     }

    //     let indentdark =$.getElementsByClassName("indentdark");
    //     for (let i = 0; i < indentdark.length; i+=1) {
    //         indentdark[i].classList.replace("indentdark","indentWhite");
    //         console.log("i="+i)  
    //     }
    // } 

    //  function darkMode() {

    //     let dark =$.getElementsByClassName("dark"),
    //     light =$.getElementsByClassName("light");
    //     // console.log(dark.length)
    //     // console.log(dark)
    //     // console.log(dark.length)

    //     // console.log(light.length)
    //     // console.log(light)

    //     for (let i = 0; i < light.length; i+=1) {
    //         light[i].classList.replace("light","dark");  
    //         console.log("i="+i)
    //     }

    //     let indentWhite =$.getElementsByClassName("indentWhite");
    //     for (let i = 0; i < indentWhite.length; i+=1) {
    //         indentWhite[i].classList.replace("indentWhite","indentdark");
    //         console.log("i="+i)  
    //     }
    // } 

    //theme btn
    $.getElementsByClassName("theme__btn__on")[0].addEventListener('click',function () {
        if (themeFlag) {//Darkens The Theme
            themeFlag = false
            $.title = "WHITE THEME"
            $.body.style.setProperty("color", "#292D34", "important");
            // darkMode()
        }
        else {//Lightens The Theme
            themeFlag = true
            $.title = "DARK THEME"
            $.body.style.setProperty("color", "#E7EBF0", "important");
            // whiteMode()
        }
        // skillsHandler()
        iconifyHandler()
        seperatorsHandler()
        picsHandler()
        sectionsHandler()
        navArrowHandler()
    })
