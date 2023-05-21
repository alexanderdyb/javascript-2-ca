import { createPost } from "../api/posts/create.mjs";
import { displayMessage } from "./message.mjs";

/**
 * Sets up a listener for the submission of the create post form.
 * When the form is submitted, it extracts the form data, creates a post, and displays a success or error message.
 */
export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");
  const editContainer = document.querySelector("#editContainer");

  if (form) {
    form.addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        await createPost(post);
        editContainer.innerHTML = displayMessage("Post created!");
      } catch (error) {
        editContainer.innerHTML = displayMessage(
          "An error occurred. Try again later."
        );
      }
    });
  }
}
