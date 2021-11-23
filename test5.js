// // Expected Result : 6
// // Direction : Get the total of "1" in binary value of number input
// const number = 221;

function toBinary(n) {
	let binary = "";
	if (n < 0) {
		n = n >>> 0;
	}
	while (Math.ceil(n / 2) > 0) {
		binary = (n % 2) + binary;
		n = Math.floor(n / 2);
	}
	const a = binary.split("1").length - 1;
	return a;
}

console.log(toBinary(211));
