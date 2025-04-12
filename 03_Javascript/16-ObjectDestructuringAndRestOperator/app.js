// // Object destructring and rest operator
let {a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500}   // cloning and destructuring
console.log(a, b)
console.log(rest)


const person = {
    name: "Mahak",
    age: 22,
    country: "India"
};

const {name:personName, age:personAge, country:personCountry} = person;

console.log(personName, personAge, personCountry)

