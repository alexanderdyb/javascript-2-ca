import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Retrieves all posts.
 * @returns {Promise<Object>} - The response JSON object.
 */
export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updatePostURL);

  return await response.json();
}

/**
 * Retrieves a specific post.
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} - The response JSON object.
 */
export async function getPost(id) {
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
