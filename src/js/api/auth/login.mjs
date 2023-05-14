import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  try {
    const loginURL = API_SOCIAL_URL + action;
    const errorMessage = document.querySelector("#errorMessage");

    const response = await fetch(loginURL, {
      headers: {
        "Content-type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw new Error("Login request failed");
    }

    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);
    storage.save("profile", user);

    window.location.href = "/post";
  } catch (error) {
    console.error("Login error:", error);
    errorMessage.innerHTML = `<p>Failed to login. Try another username/password or register if you do not have an account</p>`;
  }
}
