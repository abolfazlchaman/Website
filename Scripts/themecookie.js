let theme = localStorage.getItem("theme"),
themeFlag; //dark theme is off (by default)
const $ = document,
colorScheme = $.getElementsByName("color-scheme")[0],
styleSheet = $.getElementById("stylesheet");

if (theme=="dark") {
    themeFlag = true;
    colorScheme.setAttribute("content", "dark");
    styleSheet.setAttribute("href", "/styles/dark.css");

} else {
    themeFlag = false;
    colorScheme.setAttribute("content", "light");
    styleSheet.setAttribute("href", "/styles/white.css");
}
