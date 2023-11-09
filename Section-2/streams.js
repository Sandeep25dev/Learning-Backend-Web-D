const { error } = require("console");
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Solution 2: Streams
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (error) => {
  //     console.log(error);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });

  // Solution 3: Using Pipe Operator

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); // readableSource.pipe(writable-destination)
});

server.on("close", () => {
  console.log("Server Closed");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server started...");
});
