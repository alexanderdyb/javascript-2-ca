import { login } from "../api/auth/login.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Sets up a form listener for the login form.
 * When the form is submitted, it prevents the default form submission behavior,
 * collects the form data, and attempts to log in using the provided profile information.
 * If successful, it saves the access token and user profile in the storage and redirects to the "/post" page.
 * If unsuccessful, it displays an error message.
 */
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        const { accessToken, ...user } = await login(profile);

        storage.save("token", accessToken);
        storage.save("profile", user);

        window.location.href = "/post";
      } catch (error) {
        document.querySelector(
          "#errorMessage"
        ).innerHTML = `<p>Login failed. Try another username/password or register if you do not have an account</p>`;
      }
    });
  }
}
