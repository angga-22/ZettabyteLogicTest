// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  return input.reduce((acc, curr) => acc + curr, 0);
}

console.log(result(input));
