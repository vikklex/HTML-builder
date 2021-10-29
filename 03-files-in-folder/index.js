const { opendir } = require("fs/promises");
const path = require("path");
const fs = require("fs");

async function getFile() {
  try {
    const dir = await opendir("./03-files-in-folder/secret-folder");
    for await (const dirent of dir)
      if (dirent.isFile()) {
        let ext = path.extname(dirent.name || "").split(".");
        fs.stat(
          `./03-files-in-folder/secret-folder/${dirent.name}`,
          (err, stats) => {
            if (err) {
              console.log(`File doesn't exist.`);
            } else {
              console.log(
                `${dirent.name} - ${ext[ext.length - 1]} - ${stats.size}`
              );
            }
          }
        );
      }
  } catch (err) {
    console.error(err);
  }
}
getFile();
