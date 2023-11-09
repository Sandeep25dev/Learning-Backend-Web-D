const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmiiter = new Sales();

myEmiiter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmiiter.on("newSale", () => {
  console.log("Owner name: Sandeep Kumar");
});

myEmiiter.on("newSale", (stock) => {
  console.log(`There are total ${stock} items left in stock`);
});

myEmiiter.emit("newSale", 10);

//////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request recieved!");
  console.log(req.url);
  res.end("Request recieved!");
});

server.on("request", (req, res) => {
  console.log("Another Request Recieved ✈️");
});

server.on("close", () => {
  console.log("Server Closed");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});
