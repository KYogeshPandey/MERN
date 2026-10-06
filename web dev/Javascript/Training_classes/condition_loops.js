
let arr = [1,2,3,4,5];
let sum = 0;
console.log(arr);

let st1 = {
  name: 'John',
  age: 22
}

let st2 = {
  name : 'rahul',
  age : 21
}

let st3 = {
  name : 'mohit',
  age : 23
}

let arr2 = [st1,st2,st3];
console.log(arr2);


for(let i = 0; i < arr.length; i++){
  sum += arr[i]; 
}

console.log('sum of array is: ', sum);

if (sum % 2 == 0) {
  console.log("Given array is even");
}
else{
  console.log("array is odd");
}