var devbuild = document.getElementById("devbuild");
const urlParams = new URLSearchParams(window.location.search);

if (window.location.origin == 'nikeedev.github.io' && window.location.search == '') {
    window.location = window.location.origin + '/args-color/?r=1&g=1&b=1'
}
if (!window.location.href.includes("?")) {
    window.location = window.location.href + '?r=1&g=1&b=1'
}



document.querySelector("html").style = "background-color: rgb("+urlParams.get("r")+","+urlParams.get("g")+","+urlParams.get("b")+");";



