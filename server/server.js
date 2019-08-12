const jsonServer = require("json-server");

const getDb = require("./db.js");

const server = jsonServer.create();
const router = jsonServer.router(getDb());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running")
});
