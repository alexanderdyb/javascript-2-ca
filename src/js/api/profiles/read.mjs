import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfiles(name) {
  const updateProfileURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updateProfileURL);

  return await response.json();
}

/**
 * Retrieves a specific profile.
 * @param {string} name - The name of the profile to retrieve.
 * @returns {Promise<Object>} - The response JSON object.
 * @throws {Error} - If the name is missing.
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }
  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
