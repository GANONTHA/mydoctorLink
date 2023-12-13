const body = document.body;
const header = document.querySelector("header");
const smain = document.querySelector("main");

const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageXOffset;

  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});
