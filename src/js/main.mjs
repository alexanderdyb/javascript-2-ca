import { navbarHandler } from "./components/navbar.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

navbarHandler();

const path = location.pathname;

switch (path) {
  case "/profile/login/":
    listeners.setLoginFormListener();
    break;
  case "/profile/register/":
    listeners.setRegisterFormListener();
    break;
  case "/post/create/":
    listeners.setCreatePostFormListener();
    break;
  case "/post/edit/":
    listeners.setUpdatePostListener();
    break;
  case "/post/":
    testTemplate();
    break;
  case "/profile/edit/":
    listeners.setUpdateProfileListener();
    break;
}

const deleteButton = document.querySelectorAll(".deleteButton");

deleteButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clickedS");
  });
});

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

function logout() {
  const logoutButton = document.querySelector(".logout");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    window.location.href = "/profile/login";
  });
}

logout();

// * Create a post

// createPost({
//   title: "Example Post",
//   body: "Also an example",
// });

// * Update a post

// updatePost({
//   id: 5604,
//   title: "New Example Post UPDATED",
//   body: "Also an example",
// });

// * Delete Post

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts().then(console.log);

// post.getPost(640).then(console.log);
