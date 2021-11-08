const fs = require("fs");
const path = require("path");
const dir = path.resolve(__dirname, "files");
console.log(__dirname);

fs.readdir(dir, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  fs.mkdir("04-copy-directory/files-copy", { recursive: true }, (err) => {
    if (err) throw err;
  });
  const dir2 = path.resolve(__dirname, "files-copy");

  files.forEach((el) => {
    fs.readFile(`${dir}/${el.name}`, "utf-8", (err, data) => {
      if (err) throw err;
      else {
        fs.writeFile(`${dir2}/${el.name}`, data, "utf-8", (err) => {
          if (err) throw err;
          else console.log("ready");
        });
      }
    });
  });
});
