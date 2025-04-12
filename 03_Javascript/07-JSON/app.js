// JSON -> Javascript Object Notation
// Similar to objects in JS, BUT must use DOUBLE quotes instead of SINGLE ones.
// Must be stored in a separate file, called data.json OR whatever.

const person = {
    "name": "John Doe",
    "age": 20,
    "email": "js@gmail.com",
    "isSubscribed": true,
    "hobbies": ["Reading", "Drawing","Cooking"],
    "address": {
        "city": "New York",
        "idk": true
    }
};

// JSON.stringify() -> converts JS value to a JSON string
const stringifiedObject = JSON.stringify(person);
console.log(stringifiedObject)

// JSON.parse() -> converts JSON string to a JS value
const parsedObject = JSON.parse(stringifiedObject);
console.log(parsedObject)