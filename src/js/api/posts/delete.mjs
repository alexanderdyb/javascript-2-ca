import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Removes a post.
 * @param {string} id - The ID of the post to be removed.
 * @returns {Promise<Object>} - The response JSON object.
 * @throws {Error} - If the ID is missing.
 */
export async function removePost(id) {
  const action = "/posts";
  const method = "delete";

  if (!id) {
    throw new Error("Delete requires a postID");
  }
  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostURL, {
    method,
  });

  return await response.json();
}
