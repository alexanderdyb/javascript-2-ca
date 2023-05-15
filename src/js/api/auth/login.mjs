import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;

  const response = await fetch(loginURL, {
    headers: {
      "Content-type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
