import { removePost } from "../api/posts/delete.mjs";

export function postTemplateA(postData) {
  return `<div class="post">${postData.title}</div>`;
}

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

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}

function confirmDeletePost(event) {
  const postId = event.target.getAttribute("data-id");
  const confirmed = confirm("Are you sure you want to delete this post?");
  console.log(confirmed);
  if (confirmed) {
    removePost(postId);
  }
}
