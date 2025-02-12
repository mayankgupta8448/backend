const fs = require("fs/promises");
const read = async () => {
    const data = fs.readFile("./data.txt","utf-8");
    console.log(data);
}
const write = async () => {
    const newdata = "xyz"
    const data = fs.writeFile("./data.txt",newdata,"utf-8");
    console.log(data);
}
read();
write();
console.log("1")
console.log("2")
console.log("3")
