/**
 * Logs out the user by removing the profile and token from the local storage
 * and redirecting to the login page.
 */
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
