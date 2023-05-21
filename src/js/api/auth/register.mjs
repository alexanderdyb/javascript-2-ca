import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Registers a new user.
 * @param {Object} profile - The user's profile data.
 * @param {string} profile.username - The username.
 * @param {string} profile.password - The password.
 * @returns {Promise<Object>} - The response JSON object.
 */
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  const response = await fetch(registerURL, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();
  alert("You are registered. You can now login.");
  return result;
}
