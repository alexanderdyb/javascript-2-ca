import { navbarHandler } from "./components/navbar.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

navbarHandler();

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

testTemplate();

// * Create a post

// createPost({
//   title: "New Example Post",
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
