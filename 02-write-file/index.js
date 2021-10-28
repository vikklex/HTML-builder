const fs = require("fs");
const path = require("path");
const process = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of node.js? ", function (answer) {
  fs.open("02-write-file/text.txt", "w", (err) => {
    if (err) throw err;
    console.log("File created");
  });
  fs.appendFile("text.txt", "answer", (err) => {
    if (err) throw err;
    console.log("Data has been added!");
  });
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});
