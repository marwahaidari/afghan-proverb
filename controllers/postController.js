const fs = require('fs');

const getPosts = () => JSON.parse(fs.readFileSync('./data/posts.json'));
const savePosts = (posts) => fs.writeFileSync('./data/posts.json', JSON.stringify(posts, null, 2));

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
    ...req.body
  };
  posts.push(newPost);
  savePosts(posts);
  res.redirect('/');
};

exports.showPost = (req, res) => {
  const post = getPosts().find(p => p.id == req.params.id);
  res.render('show', { post });
};

exports.editPostForm = (req, res) => {
  const post = getPosts().find(p => p.id == req.params.id);
  res.render('edit', { post });
};

exports.updatePost = (req, res) => {
  let posts = getPosts();
  posts = posts.map(post => post.id == req.params.id ? { ...post, ...req.body } : post);
  savePosts(posts);
  res.redirect('/');
};

exports.deletePost = (req, res) => {
  let posts = getPosts();
  posts = posts.filter(p => p.id != req.params.id);
  savePosts(posts);
  res.redirect('/');
};
