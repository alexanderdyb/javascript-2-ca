import { getMyPosts } from "../api/posts/readMyPosts.mjs";
import { confirmDeletePost } from "../handlers/confirmDeletePost.mjs";
import { searchPostsByValue } from "../handlers/searchPosts.mjs";

/**
 * Generates the HTML template for rendering a post.
 *
 * @param {Object} postData - The data of the post to be rendered.
 * @returns {HTMLElement} The generated HTML template for the post.
 */
export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.classList.add("card");
  post.innerHTML = `<p class="mb-3">Created: ${postData.created}
                    <p>Title: ${postData.title}</p> 
                    <p class="mt-3 mb-3">${postData.body}</p>
                    <p class="mb-3">Tags: ${postData.tags}</p>
                    <a href="/post/edit/?id=${postData.id}" class="px-3  py-1 border bg-blue-950 text-white mr-3">Edit</a>`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "border",
    "px-3",
    "py-1",
    "bg-blue-950",
    "text-white"
  );
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-id", postData.id);
  deleteButton.addEventListener("click", confirmDeletePost);
  post.append(deleteButton);

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  return post;
}

/**
 * Renders a single post template and appends it to the parent element.
 *
 * @param {Object} postData - The data of the post to be rendered.
 * @param {HTMLElement} parent - The parent element to which the post template will be appended.
 * @returns {void}
 */
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

/**
 * Renders multiple post templates and appends them to the parent element.
 * Provides filtering and searching functionalities for the posts.
 *
 * @param {Object[]} postDataList - The list of post data objects to be rendered.
 * @param {HTMLElement} parent - The parent element to which the post templates will be appended.
 * @returns {void}
 */
export function renderPostTemplates(postDataList, parent) {
  const filterPosts = document.querySelector("#filter");
  const searchInput = document.querySelector("#search");

  filterPosts.addEventListener("change", async (event) => {
    parent.innerHTML = "";
    const filterValue = event.target.value;
    if (filterValue === "image") {
      const postsWithImages = postDataList.filter(function (el) {
        return el.media !== "" && el.media !== null;
      });

      parent.append(...postsWithImages.map(postTemplateB));
    } else if (filterValue === "myPosts") {
      try {
        const listOfMyPosts = await getMyPosts();
        console.log(listOfMyPosts);
        parent.append(...listOfMyPosts.map(postTemplateB));
      } catch (error) {
        console.error(error);
      }
    } else {
      parent.append(...postDataList.map(postTemplateB));
    }
  });

  searchInput.addEventListener("input", () => {
    parent.innerHTML = "";
    const searchValue = searchInput.value;
    const searchedPosts = searchPostsByValue(postDataList, searchValue);
    parent.append(...searchedPosts.map(postTemplateB));
  });

  parent.append(...postDataList.map(postTemplateB));
}
