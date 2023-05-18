import { load } from "../storage/index.mjs";

/**
 * Generates the headers for API requests.
 * @returns {Object} - The headers object.
 */
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Performs an authenticated fetch request.
 * @param {string} url - The URL to fetch.
 * @param {Object} [options={}] - Additional fetch options.
 * @returns {Promise<Response>} - The fetch response promise.
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
