let theme = localStorage.getItem("theme"),
themeFlag; //dark theme is off (by default)
const $ = document;
if (theme=="dark") {
    themeFlag = true;
    $.getElementById("stylesheet").setAttribute("href", "/styles/dark.css");
} else {
    themeFlag = false;
    $.getElementById("stylesheet").setAttribute("href", "/styles/white.css");
}