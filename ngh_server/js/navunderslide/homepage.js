let horizontalunderline = document.getElementById("horizontal-underline")
let horizontalmenus = document.querySelectorAll("nav_main_menu ul li")

horizontalmenus.forEach((menu) => 
    menu.addEventListener("click", (e) => horizontalIndicator(e)))

function horizontalIndicator(e){
    horizontalunderline.style.left = e.currentTarget.offsetLeft + "px";
    horizontalunderline.style.width = e.currentTarget.offsetWidth + "px";
    horizontalunderline.style.top = 
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}