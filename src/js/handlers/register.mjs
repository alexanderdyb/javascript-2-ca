import { register } from "../api/auth/register.mjs";

/**
 * Sets up a form listener for the registration form.
 * When the form is submitted, it prevents the default form submission behavior,
 * collects the form data, and registers a new user using the provided profile information.
 *
 * @returns {void}
 */
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      register(profile);
    });
  }
}
