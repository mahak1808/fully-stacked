function checkNumber(number){
  return new Promise((resolve, reject) => {
    if(number%2==0){
      resolve(`${number} is an even number.`)
    } else{
      reject(`${number} is an odd number.`)
    }
  });
}

const numToCheck = 6;

// message/output if promise is resolved AND if it's rejected
checkNumber(numToCheck).then((message)=>{
  console.log(`Success: ${message}`);
})
.catch((error)=>{
  console.log(`Error: ${error}`);
});

// -------- REFACTORING CODE TO USE PROMISES ------------
function callbackHell(){
  return new Promise((resolve) => {
    setTimeout(()=>{
      const data = 'Inside (callbackHell) function'
      console.log(data);
      resolve(data);
    },2000);
  })
}

function firstFunc(data){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const processedData = `${data} - Processed data1`;
      console.log("Inside (firstFunc) function");
      resolve(processedData);
    },2000);
  });
}

function secondFunc(data){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const processedData = `${data} - Processed data2`;
      console.log("Inside (secondFunc) function");
      resolve(processedData);
    },1500);
  });
}

callbackHell()
.then(data => firstFunc(data))
.then((processedData1)=> secondFunc(processedData1))
.then((processedData2 => console.log(`Final result of all functions with Promises: ${processedData2}`)))
.catch(error => console.log(`Error: ${error}`));