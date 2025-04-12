// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.
function createVehicle(type, brand, model, year){
  return {type,brand,model,year};
}

console.log(createVehicle("Car","Toyota","Crysta","2023"))