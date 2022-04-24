console.clear()
let $ = document,
    _id = $.getElementById,
    dark =$.getElementsByClassName("dark"),
    white =$.getElementsByClassName("white"),
    seprator =$.getElementsByClassName("seprator"),
    _tg = $.getElementsByTagName;
    

    function whiteMode() {
        $.getElementById("line").setAttribute("src","images/line.png")
        $.getElementById("line2").setAttribute("src","images/line.png")
        $.getElementById("circle").setAttribute("src","images/circle.png")

        let dark =$.getElementsByClassName("dark");
        // console.log(dark)
        for (let index = 0; index < dark.length; index+=1) {
            if (dark[index].classList.contains("dark")) {
                dark[index].classList.replace("dark","white");  
            } 
        }

        let indentdark =$.getElementsByClassName("indentdark");
        for (let index = 0; index < indentdark.length; index+=1) {
            if (indentdark[index].classList.contains("indentdark")) {
                indentdark[index].classList.replace("indentdark","indentWhite");  
            } 
        }

        for (let index = 0; index < seprator.length; index+=1) {
            seprator[index].setAttribute("src","images/seprator.png");  
        }}

    function darkMode() {
        $.getElementById("line").setAttribute("src","images/blackline.png")
        $.getElementById("line2").setAttribute("src","images/blackline.png")
        $.getElementById("circle").setAttribute("src","images/blackcircle.png")

        let white =$.getElementsByClassName("white");
        // console.log(white)
        for (let index = 0; index < white.length; index+=1) {
            if (white[index].classList.contains("white")) {
                white[index].classList.replace("white","dark");  
            } 
        }

        let indentWhite =$.getElementsByClassName("indentWhite");
        for (let index = 0; index < indentWhite.length; index+=1) {
            if (indentWhite[index].classList.contains("indentWhite")) {
                indentWhite[index].classList.replace("indentWhite","indentdark");  
            } 
        }
        for (let index = 0; index < seprator.length; index+=1) {
            seprator[index].setAttribute("src","images/blackseprator.png");  
        }
    }
    
    let themeFlag = true; //white theme is enabled

    //theme btn
    $.getElementsByClassName("theme__btn__on")[0].addEventListener('click',function () {
        //  console.log($.body.style.backgroundColor)
        if (!themeFlag) {
            whiteMode()
            themeFlag = true
        }
        else {
            darkMode()
            themeFlag = false
        }
    })


