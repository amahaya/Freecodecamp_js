//Create a variable named plantNeedsWater using the const variable keyword. Assign an anonymous function that takes in a parameter of day to plantNeedsWater.

//In the function body add an if conditional that checks day === 'Wednesday'. If the conditional is truthy, inside the if code block, use the return keyword to return true. Add an else statement after the if statement. Inside the else statement use the return keyword to return false.

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater("Tuesday");

console.log(plantNeedsWater("Tuesday"));

//Concise Body Arrow Functions: Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.
// const plantNeedsWater = (day) => {
// return day === 'Wednesday' ? true : false;
// };

const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
