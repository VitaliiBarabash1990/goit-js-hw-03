console.log("task-3");

function filterArray(number, value) {
	let array = [];
	for (i = 0; i < number.length; i += 1) {
		if (number[i] > value) {
			array.push(number[i]);
		}
	}
	return array;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
