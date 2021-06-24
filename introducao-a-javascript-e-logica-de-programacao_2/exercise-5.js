let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i] ) {
        largest = numbers[i];
    }
  } 

  console.log(largest)

  // fonte : https://stackoverflow.com/questions/13794225/finding-largest-integer-in-an-array-in-javascript