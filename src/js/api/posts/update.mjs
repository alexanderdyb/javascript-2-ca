import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

/**
 * Updates a post.
 * @param {Object} postData - The data for the post update.
 * @param {string} postData.id - The ID of the post to update.
 * @returns {Promise<Object>} - The response JSON object.
 * @throws {Error} - If the ID is missing.
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
