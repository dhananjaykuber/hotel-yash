// const menuIcon = document.querySelector(".menuIcon");
// const navbar = document.querySelector(".navbar");
// let open = false;

// function handleMenuBar() {
//   if (open) {
//     menuIcon.style.backgroundImage = "url('/assets/hamburger.svg')";
//     open = false;
//     navbar.classList.remove("show");
//   } else {
//     menuIcon.style.backgroundImage = "url('/assets/close.svg')";
//     open = true;
//     navbar.classList.add("show");
//   }
//   menuIcon.style.backgroundPosition = "center";
//   menuIcon.style.backgroundSize = "center";
//   menuIcon.style.backgroundRepeat = "no-repeat";
// }

const hamburger = document.querySelector(".hamburgerContainer");
const navigation = document.querySelector(".navigation");
let hamburgerOpen = false;

hamburger.addEventListener("click", () => {
  if (hamburgerOpen) {
    hamburger.classList.remove("open");
    navigation.style.left = "-100vw";
    hamburgerOpen = false;
  } else {
    hamburger.classList.add("open");
    navigation.style.left = "0vw";
    hamburgerOpen = true;
  }
});

function removeShow() {
  hamburger.classList.remove("open");
  navigation.style.left = "-100vw";
  hamburgerOpen = false;
}
