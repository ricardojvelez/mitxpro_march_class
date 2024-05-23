let arr = ["a", "b", "c", "d", "e"];

arr.splice(1, 2); // Remove 2 elements starting from index 1
console.log(arr); // Output: [ 'a', 'd', 'e' ]

let numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach((number) => {
  console.log(number * 2);
});
console.log(numbersArray); // Output: [ 1, 2, 3, 4, 5 ]
console.log(numbersArray.map((number) => number * 2)); // Output: [ 2, 4, 6, 8, 10 ]
console.log(numbersArray); // Output: [ 1, 2, 3, 4, 5 ]
