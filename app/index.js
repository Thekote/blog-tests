const app = require("./server/index.js");

const port = process.env.PORT || 3005;

if (require.main === module) {
  app.listen(port, () => console.log(`Server listening at port: ${port}.`));
}

module.exports = app;
