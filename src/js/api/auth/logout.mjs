export function logout() {
  const logoutButton = document.querySelector(".logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("profile");
      localStorage.removeItem("token");
      window.location.href = "/profile/login";
    });
  }
}
