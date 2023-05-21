import { removePost } from "../api/posts/delete.mjs";

/**
 * Handles the confirmation and deletion of a post.
 *
 * @param {Event} event - The event object representing the click event on the delete button.
 * @returns {void}
 */
export function confirmDeletePost(event) {
  const postId = event.target.getAttribute("data-id");
  const confirmed = confirm("Are you sure you want to delete this post?");
  if (confirmed) {
    removePost(postId);
  }
}
