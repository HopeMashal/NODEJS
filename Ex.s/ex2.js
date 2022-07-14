const fs=require('fs');
fs.writeFileSync('text1.txt','This file was created by Node.js!!');
fs.copyFileSync('text1.txt','text2.txt');
fs.renameSync('text2.txt','newtext.txt');
fs.readdirSync('./').forEach(file => {
  console.log(file);
});
const list = fs.readdirSync("./");
fs.appendFileSync("text1.txt", `\n${list}`);
