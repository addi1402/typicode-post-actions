export default function matchPost(users, posts) {
  let newPost = posts.map((post) => {
    return { ...post, user: users?.find((u) => u.id === post.userId) };
  });
  return newPost;
}
