import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

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
