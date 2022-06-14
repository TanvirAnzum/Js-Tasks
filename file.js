const fs = require("fs");

fs.writeFile("file.txt", "ahare ahare ", (err) => {
  if (err) {
    console.error(err);
  }
});

fs.appendFile("file.txt", "kothay pabo tahareee", (err) => {
  if (err) {
    console.error(err);
  }
});

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
