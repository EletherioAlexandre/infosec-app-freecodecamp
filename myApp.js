const express = require('express');
const helmet = require('helmet');
const app = express();












































app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Info Security Application started on port ${port}`);
});

module.exports = app;
