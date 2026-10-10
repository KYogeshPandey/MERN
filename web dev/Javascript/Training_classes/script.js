// let a = 3;
// let result = 1;
// while(a > 0) {
//   result *= a;
//   a--;
// }
// console.log(result);

// greet();
// function greet() {
//   console.log('hello');
// }

// for(var i = 0; i < 3; i++){
//   setTimeout(() => console.log(i), 1500)
// }

// for(let i = 0; i < 3; i++){
//   setTimeout(() => console.log(i), 1500)
// }

// let a = 7;
// let isprime = true;
// for (let i = 2; i < Math.floor(Math.sqrt(a)) + 1; i++){
//   if (a % i == 0){
//     isprime = false;
//     break;
//   }
// }
// if (isprime) {
//   console.log('prime');
// }
// else {
//   console.log('Not prime');
// }

// console.log(1);

// setTimeout(() => console.log(2), 0);
// console.log(3);

var prompt = require('prompt-sync')();
let a = Number(prompt('Enter the number:'))

for (let i = 0; i <= a; i++) {
  console.log(i);
}
