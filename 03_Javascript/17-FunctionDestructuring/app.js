// // Function destructring in JS

const person = {
    name: "Mahak",
    age: 22,
    country: "India"
};

// Bec. we've to write person.name, .... again and again, we'll destructure the object and then use it as a parameter for the function
function printInfo(person){
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
    console.log(`Country: ${person.country}`)
}

function printInfoDestructured({name,age,country}){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Country: ${country}`)
}

printInfo(person)
printInfoDestructured(person)


// ------- EXAMPLE 2 -------------
let options = {
    title: "My menu",
    items: ['item1','item2']
}

function showMenu({title, width: w=100, height: h=200, items:[item1,item2]}){
    console.log(`${title} ${w} ${h}`)
    console.log(item1)
    console.log(item2)
}

showMenu(options)
