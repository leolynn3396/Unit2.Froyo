// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?
// Can you prompt the user for froyo Flavors and store their result?
// Can you parse the user input into an array of froyo Flavors?
// Can you build an object to track which Flavors you have observed so far?
// As you iterate through the array of Flavors, when should that object be updated?
// Is your logic organized into a function?

/*
// Prompt the user for a list of integers separated by commas.
const userInputString = prompt("Please enter froyo Flavors.", "vanilla, vanilla, strawberry, coffee");

  // Parse the user input into an array of strings
const stringArray = userInputString.split(",");


const object = {
  flavors = userInputString;
}

const Flavors = {};

for (let i = 0; i < stringArray.length; i++) {
  const inputFlavor = stringArray[i].trim();
  if (Flavors[inputFlavor] == null) {
    Flavors[inputFlavor] = 1;
  } else {
    Flavors[inputFlavor] = Flavors[inputFlavor] + 1;
  }
}

console.table(Flavors);

const userResponse;

function returnTable (arr) {
  const hashTable = {};
  for (let i = 0 ; i < array.length;i++) {

  }
}
*/

const ids = prompt(
  "enter froyo flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const userResponseArr = ids.split(',');

function returnTable(arr) {
  const hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]; //vanilla

    if (hashTable[item] === undefined) {
      hashTable[item] =1;
    } else {
      hashTable[item] += 1;
    }
    return hashTable
  }
  console.table(returnTable(userResponseArr))
}