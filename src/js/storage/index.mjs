/**
 * Saves a value in the local storage.
 *
 * @param {string} key - The key under which the value will be saved.
 * @param {*} value - The value to be saved.
 * @returns {void}
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loads a value from the local storage.
 *
 * @param {string} key - The key for the value to be loaded.
 * @returns {*} The loaded value, or null if the key is not found or an error occurs.
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * Removes a value from the local storage.
 *
 * @param {string} key - The key for the value to be removed.
 * @returns {void}
 */
export function remove(key) {
  localStorage.removeItem(key);
}
