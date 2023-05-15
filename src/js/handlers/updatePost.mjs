import { getPost, updatePost } from "../api/posts/index.mjs";
import { displayMessage } from "./message.mjs";
const updatePostContainer = document.querySelector("#updatePostContainer");

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    try {
      const post = await getPost(id);

      form.title.value = post.title;
      form.body.value = post.body;
      form["tags[]"].value = post.tags.join(", ");
      form.media.value = post.media;

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        post.id = id;

        try {
          await updatePost(post);
          updatePostContainer.innerHTML = displayMessage(
            "Post updated successfully."
          );
        } catch (error) {
          updatePostContainer.innerHTML = displayMessage(
            "Error updating post:",
            error
          );
        }
      });
    } catch (error) {
      updatePostContainer.innerHTML = displayMessage(
        "Error retrieving post:",
        error
      );
    }
  }
}
