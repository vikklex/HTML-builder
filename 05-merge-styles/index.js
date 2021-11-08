const fs = require("fs");
const path = require("path");
const dirStyle = path.join(__dirname, "styles");

fs.mkdir("05-merge-styles/project-dist", { recursive: true }, (err) => {
  if (err) throw err;
});

const bundle = path.join(__dirname, "project-dist/bundle.css");

fs.writeFile(bundle, "", (err) => {
  if (err) throw err;
});

fs.readdir(dirStyle, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((el) => {
    if (path.extname(el.name) === ".css") {
      fs.readFile(`${dirStyle}/${el.name}`, "utf-8", (err, data) => {
        if (err) throw err;
        else {
          fs.appendFile(bundle, data, (err) => {
            if (err) throw err;
          });
        }
      });
    }
  });
});
