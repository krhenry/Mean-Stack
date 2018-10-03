const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fadf12442l',
      title: "titleee",
      content: "contenttt"
    }
  ];

  res.status(200).json({
    message: 'post good',
    posts: posts
  });
});

module.exports = app;
