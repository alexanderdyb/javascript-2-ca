import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "put";

/**
 * Updates a profile.
 * @param {Object} profileData - The data for the profile update.
 * @param {string} profileData.name - The name of the profile to update.
 * @returns {Promise<Object>} - The response JSON object.
 * @throws {Error} - If the name is missing.
 */
export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  // return await response.json();

  return await response.json();
}
