const fs = require("fs");
const path = require("path");

const stream = fs.createReadStream("01-read-file/text.txt", "utf8");
stream.on("data", (data) => console.log(data));
stream.on("error", (err) => console.log(`Err: ${err}`));
