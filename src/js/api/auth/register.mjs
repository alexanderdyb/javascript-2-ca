import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  const response = await fetch(registerURL, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();
  alert("You are registered. You can now login.");
  return result;
}
