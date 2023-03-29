const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt"),
});

const printData = (data) =>{
  console.log(`Item: ${data}`);
}

// myInterface.on("line", (fileLine) => {
//   console.log(`The line read: ${fileLine}`);
// });

myInterface.on('line',printData);
