// In JavaScript, try and catch are keywords used to implement error handling. 
// Error handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. 
// The try and catch blocks work together to enable developers to catch and handle errors, preventing them from crashing the entire application.

function parseJSON(jsonString){
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error(`An error occured while [assing JSON: ${error.message}`);
    return null;
  }
}

const validJSON = '{"name": "Mahak", "age": 22}';
const invalidJSON = '{"name": "Mahak,}'

const result1 = parseJSON(validJSON);
console.log(result1);

const result2 = parseJSON(invalidJSON);
console.log(result2)