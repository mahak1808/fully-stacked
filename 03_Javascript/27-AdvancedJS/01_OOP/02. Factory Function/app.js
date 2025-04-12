// A factory function is a type of function that is used to create and return objects.
// It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.


// Let's suppose this is a userInfo for a single user, to be entered in a Database
// We'd need to create 1000's of such objects to enter 1000's of user info's
let mahak = {
  fN: "Mahak",
  lN: "Kaur",
  intro: function(){
    console.log(`Hello, my name is ${this.fN} ${this.lN} & I love Javascript`)
  }
};

let meet = {
  fN: "Meet",
  lN: "Singh",
  intro: function(){
    console.log(`Hello, my name is ${this.fN} ${this.lN} & I love Javascript`)
  }
};

// Instead of all this, we can use FACTORY FUNCTIONS
function createPerson(fN, lN, programmingLanguage){
  return {      // FACTORY OBJECT
    fN: fN,   // DONT'T use this.fN here -> it'll refer to 'window' object
    lN: lN,
    pl: programmingLanguage,
    intro: function(){
      console.log(`Hey, I'm ${this.fN} ${this.lN} & I love ${this.pl}.`)
    }
  };
};
const Mahak = createPerson("Mahak","Kaur","CPP")
console.log(Mahak.intro())   // This also gives undefined after the o/p bec. we've already used clg above in the function
