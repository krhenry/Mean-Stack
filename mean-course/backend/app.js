const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

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
