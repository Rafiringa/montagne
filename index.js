const mouses = document.querySelectorAll(".mouse");
const cursor = document.querySelector("#mouse0");
const textContainer = document.querySelectorAll(".text");

// window.addEventListener("mousemove", (e) => {
//   mouses.forEach((mouse) => {
//     mouse.style.left = e.x + "px";
//     mouse.style.top = e.y + "px";
//   });
// });

// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScroll) {
//     navbar.style.top = 0;
//   } else {
//     navbar.style.top = "-60px";
//   }

//   lastScroll = window.scrollY;
// });

// Scroll image

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.3) {
    imgPhone.style.opacity = 1;
    imgPhone.style.transform = "none";
  } else {
    imgPhone.style.opacity = 0;
    imgPhone.style.transform = "translateY(100px)";
  }
});
