import { navbarHandler } from "./components/navbar.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { logout } from "./api/auth/logout.mjs";

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
    logout();
    break;
  case "/post/edit/":
    listeners.setUpdatePostListener();
    logout();
    break;
  case "/post/":
    template();
    logout();
    break;
  case "/profile/edit/":
    listeners.setUpdateProfileListener();
    logout();
    break;
}

async function template() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}
