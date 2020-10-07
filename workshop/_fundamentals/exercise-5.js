// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  // Insert missing solution please
  let numDays;
  switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      numDays = 31;
      break;
    case "february":
      numDays = 28;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      numDays = 30;
      break;
    default:
      numDays = "error";
      break;
  }
  return numDays;
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
