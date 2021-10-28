const fs = require("fs");
const path = require("path");
const process = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  rl.question("What do you think of node.js? ", (answer) => {
    const logStream = fs.createWriteStream("02-write-file/text.txt", {
      flags: "a",
    });
    if (answer === "exit") {
      process.exit();
    }
    logStream.write(`${answer}\n`);
    logStream.close();

    question();
  });
}

const onExit = () => {
  console.log("Your exit is a big mistake!:(");
  process.exit();
};
// For MacOS
process.on("exit", onExit);
process.on("SIGINT", onExit);

question();
