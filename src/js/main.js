const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  close.classList.remove("hidden");
  close.classList.add("md:hidden");
  hamburger.classList.add("hidden");
});

close.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  hamburger.classList.add("md:hidden");
  close.classList.add("hidden");
});
