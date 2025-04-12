function Car(make,model,year,color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function(){
    return `Starting the ${this.make} ${this.model}...`;
  };
  this.stop = function(){
    return `Stopping the ${this.make} ${this.model}...`
  }
}

const car1 = new Car("Toyota","Innova","2022","white");
const car2 = new Car("Maruti","Celerio","2016","gray");
console.log(car1.start());
console.log(car2.stop());