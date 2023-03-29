const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('C:\\Users\\Owner\\OneDrive\\Desktop\\CodingExamples&Notes\\Node.js\\Node Modules\\FSMod\\shoppingList.txt')
});


const fileStream = fs.createWriteStream('shoppingResults.txt');


const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData);