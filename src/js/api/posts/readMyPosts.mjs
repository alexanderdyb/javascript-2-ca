import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Retrieves profile posts.
 * @returns {Promise<Object>} - The response JSON object.
 */
export async function getMyPosts() {
  const value = localStorage.getItem("profile");
  const parsedData = JSON.parse(value);
  const name = parsedData.name;
  const getProfilePostsURL = `${API_SOCIAL_URL}/profiles/${name}/posts`;

  const response = await authFetch(getProfilePostsURL);

  return await response.json();
}
