// ----------------------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user hobbies...");
//     callback(["Cricket", "Reading", "Dancing"]);
//   }, 2000);
// }

// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");
// ----------------------------------------------

console.log('Start');

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting User Name...");
      resolve(name);
    }, 2000);
  })
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Cricket", "Reading", "Dancing"]);
    }, 2000);
  }) 
}

getUserDataFromDB("Mahak")
.then(name => getUserHobbies(name))
.then(hobby => console.log(hobby))
.catch(error => console.log(error));

console.log('End');
