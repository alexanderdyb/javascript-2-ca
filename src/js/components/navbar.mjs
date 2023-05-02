export function navbarHandler() {
  const hamburger = document.querySelector("#hamburger");
  const close = document.querySelector("#close");
  const menu = document.querySelector("#menu");

  hamburger.addEventListener("click", () => {
    close.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  });

  close.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  });
}
