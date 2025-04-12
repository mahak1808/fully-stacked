// condition ? expIfTrue : expIfFalse

let password = 2;

function passwordChecker(ps){
  if(ps === 8){
    return `Strong Password`
  }
  else{
    return `Password should be 8 characters`
  }
}

console.log(passwordChecker(password));

// Ternary

function ternaryFunc(ps){
  return (ps===8) ? (console.log(`Strong Password`)) : (console.log(`Weak Password`));
}
ternaryFunc(password)


// Example

const age = 22

const isAdult = age>=18 ? "Adult" : "Kid"
console.log(isAdult)

const money = false

const canBuy = money ? "Buy products" : "They should bring money"
console.log(canBuy)