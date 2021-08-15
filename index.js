const menuIcon = document.querySelector(".menuIcon");
const navbar = document.querySelector(".navbar");
let open = false;

function handleMenuBar() {
  if (open) {
    menuIcon.style.backgroundImage = "url('/assets/hamburger.svg')";
    open = false;
    navbar.classList.remove("show");
  } else {
    menuIcon.style.backgroundImage = "url('/assets/close.svg')";
    open = true;
    navbar.classList.add("show");
  }
  menuIcon.style.backgroundPosition = "center";
  menuIcon.style.backgroundSize = "center";
  menuIcon.style.backgroundRepeat = "no-repeat";
}

function removeShow() {
  navbar.classList.remove("show");
  open = false;
  menuIcon.style.backgroundImage = "url('/assets/hamburger.svg')";
  menuIcon.style.backgroundPosition = "center";
  menuIcon.style.backgroundSize = "center";
  menuIcon.style.backgroundRepeat = "no-repeat";
}
