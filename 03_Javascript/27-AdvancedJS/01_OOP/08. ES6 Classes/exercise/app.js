// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero{
  constructor(name,level){
    this.name = name;
    this.level = level;
  }
  greet(){
    return `Hey ${this.name}`;
  }
}

const spiderman = new Hero("Peter Parker","Pro")

class Mega extends Hero{
  constructor(name,level,spell){
    super(name,level);
    this.spell = spell;
  }
}

const ironman = new Mega("Tony Stark","Super","Jarvis");

console.log(spiderman);
console.log(spiderman.greet());
console.log(ironman);
console.log(ironman.greet());