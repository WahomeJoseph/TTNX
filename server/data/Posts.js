import fs from 'node:fs/promises';

const  getStoredPosts =async  () => {
  const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

function storePosts(posts) {
  return fs.writeFile('Posts.json', JSON.stringify({ posts: posts || [] }));
}

export { getStoredPosts, storePosts };