import { getProfile, updateProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";
import { displayMessage } from "./message.mjs";
const updateProfileContainer = document.querySelector(
  "#updateProfileContainer"
);

/**
 * Sets up a form listener for updating the user profile.
 * Loads the user profile data, pre-fills the form with the data,
 * and handles the form submission for updating the profile.
 * Displays success or error messages accordingly.
 *
 * @returns {Promise<void>}
 */
export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    try {
      const { name, email } = load("profile");
      form.name.value = name;
      form.email.value = email;

      const profile = await getProfile(name);

      form.banner.value = profile.banner;
      form.avatar.value = profile.avatar;

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        profile.name = name;
        profile.email = email;

        try {
          await updateProfile(profile);
          updateProfileContainer.innerHTML = displayMessage(
            "Profile updated successfully."
          );
        } catch (error) {
          updateProfileContainer.innerHTML = displayMessage(
            "Error updating profile:",
            error
          );
        }
      });
    } catch (error) {
      updateProfileContainer.innerHTML = displayMessage(
        "Error loading profile:",
        error
      );
    }
  }
}
