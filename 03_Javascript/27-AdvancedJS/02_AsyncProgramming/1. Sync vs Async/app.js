// ------ SYNCHRONOUS CODE ---------
// function myFunc(){
//   console.log(`Inside function`)
// }

// console.log('Start');
// myFunc();
// console.log('End');

// -------- ASYNCHRONOUS CODE -----------
console.log('Start');
setTimeout(()=>{
  console.log('Inside SetTimeOut')
},2000);
console.log('End');