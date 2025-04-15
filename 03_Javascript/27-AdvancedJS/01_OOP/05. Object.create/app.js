// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
  greet: function(){
    console.log(`Hi, I'm ${this.fN} ${this.lN}`)
  }
}

// making an instance of the object above
const mahak = Object.create(person)
mahak.fN = "Mahak"
mahak.lN = "Kaur"
mahak.greet();

let meet = Object.create(person, {
  fN: {value: "Meet"},
  lN: {value: "Singh"}
})
meet.greet()