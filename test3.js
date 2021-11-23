// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(Arr1, Arr2) {
	let bool = [];
	const val1 = arr2.some((num) => arr1.find((x) => num >= x));
	const val2 = arr1.some((num) => arr2.find((x) => num <= x));
	bool.push(val1, val2);
	return bool;
}

console.log(result(arr1, arr2));
