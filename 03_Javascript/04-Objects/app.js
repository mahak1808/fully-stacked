// OBJECTS -> {label: value}

const person = {
    firstName: "Mahak",
    lastName: "Kaur",
    age: 22,
    location: ["Planrt", "Earth"],
    isProgrammer: true,
    10: "ten"
};
console.log(person);


// ----------- ACCESSING ITEMS FROM OUR OBJECTS-----------------
console.log(person['age'])
console.log(person.age)
console.log(person['10'])

// ----------- ADD NEW ELEMENTS TO THE OBJECT ----------------
person.occupation = "Student";
console.log(person)

// ----------- DELETE SOMETHING FROM THE OBJECT --------------
delete person.occupation;
console.log(person);

const car = {
    type: "Mahindra",
    model: "XUV 500",
    color: "Opulent Purple"
}

console.log(car)
console.log(typeof(car))

car.type = "Toyota"
console.log(car)

car.wheels = 4
console.log(car)