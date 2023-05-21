/**
 * Searches posts based on a search value.
 *
 * @param {Object[]} posts - The list of post data objects to be searched.
 * @param {string} value - The search value.
 * @returns {Object[]} The filtered list of posts matching the search value.
 */
export function searchPostsByValue(posts, value) {
  const searchTerm = value.toLowerCase().trim();
  return posts.filter((post) => {
    const lowercaseTitle = post.title ? post.title.toLowerCase() : "";
    const lowercaseBody = post.body ? post.body.toLowerCase() : "";
    return (
      lowercaseTitle.includes(searchTerm) || lowercaseBody.includes(searchTerm)
    );
  });
}
