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
                    <a href="/post/edit/?id=${postData.id}" class="py-1 px-3 border bg-blue-950 text-white">Edit</a>
                    <button id="${postData.id}" class="deleteButton py-1 px-3 bg-blue-950 text-white">Delete</button>`;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  // parent.innerHTML += postTemplateA(postData);
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}
