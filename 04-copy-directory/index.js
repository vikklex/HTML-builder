const fs = require("fs");

const path = require("path");

const files = path.join(__dirname, "files");

const filesCopy = path.join(__dirname, "filesCopy");

function copy() {
  fs.readdir(files, function (err, items) {
    if (err) throw err;

    items.forEach(function (item) {
      fs.copyFile(
        path.join(__dirname, "files", item),
        path.join(__dirname, "filesCopy", item),
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
}

fs.access(filesCopy, (err) => {
  if (err) {
    fs.mkdir(filesCopy, { recursive: true }, (err) => {
      if (err) throw err;
    });

    copy();
  } else {
    fs.readdir(filesCopy, function (err, items) {
      if (err) throw err;

      items.forEach(function (item) {
        fs.unlink(path.join(__dirname, "filesCopy", item), (err) => {
          if (err) throw err;
        });
      });
    });

    copy();
  }
});
