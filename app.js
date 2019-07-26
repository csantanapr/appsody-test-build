const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kabanero!");
});
 
module.exports.app = app;
