import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

/**
 * Logs in a user.
 * @param {Object} profile - The user's profile data.
 * @param {string} profile.username - The username.
 * @param {string} profile.password - The password.
 * @returns {Promise<Object>} - The response JSON object.
 * @throws {Error} - If the login fails.
 */
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;

  const response = await fetch(loginURL, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
