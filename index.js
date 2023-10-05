// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?
// Can you prompt the user for froyo flavors and store their result?
// Can you parse the user input into an array of froyo flavors?
// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter froyo flavors.", "vanilla, strawberry, coffee"
  );

  // Split the string of input into an array of strings.
const stringArray = userInputString.split(",");


