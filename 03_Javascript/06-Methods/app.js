// 1-> Creating a function and passing its reference to an object

function greet(){
    return `Hi, I'm ${person.name} and I'm ${person.age} years old.`
}

const person = {
    name: "Mahak",
    age: 22,
    greet       // passing the reference here
};

console.log(person.greet());


// 2-> Creating a method inside an object directly

const peep = {
    name: "Meet",
    age: 25,
    wish: function(){
        return `Hello, My name is ${peep.name} and I'm ${peep.age} years old.`;
    }
};

console.log(peep.wish())