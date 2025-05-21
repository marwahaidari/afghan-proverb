const fs = require('fs');
const path = './data/posts.json';

const getPosts = () => JSON.parse(fs.readFileSync(path));
const savePosts = (posts) => fs.writeFileSync(path, JSON.stringify(posts, null, 2));

exports.listPosts = (req, res) => {
  const posts = getPosts();
  res.render('index', { posts });
};

exports.newPostForm = (req, res) => {
  res.render('new');
};

exports.createPost = (req, res) => {
  const posts = getPosts();
  const newPost = {
    id: Date.now(),
    ...req.body,
  };
  posts.push(newPost);
  savePosts(posts);
  res.redirect('/');
};

exports.showPost = (req, res) => {
  const post = getPosts().find((p) => p.id == req.params.id);
  res.render('show', { post });
};

exports.editPostForm = (req, res) => {
  const post = getPosts().find((p) => p.id == req.params.id);
  res.render('edit', { post });
};

exports.updatePost = (req, res) => {
  let posts = getPosts();
  posts = posts.map((post) =>
    post.id == req.params.id ? { ...post, ...req.body } : post
  );
  savePosts(posts);
  res.redirect('/');
};

exports.deletePost = (req, res) => {
  let posts = getPosts();
  posts = posts.filter((p) => p.id != req.params.id);
  savePosts(posts);
  res.redirect('/');
};

exports.searchPost = (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.redirect('/');
  }

  const allPosts = getPosts();
  const result = allPosts.find((post) => post.id.toString() === query);

  if (!result) {
    return res.render('index', {
      posts: [],
      showBack: true,
      message: 'No proverb found with this ID.',
    });
  }

  res.render('index', {
    posts: [result],
    showBack: true,
  });
};
