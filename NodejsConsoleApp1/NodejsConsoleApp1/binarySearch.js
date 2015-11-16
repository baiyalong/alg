//binary search
// logn

'use strict'

var arr = require('./testArray.js');
arr.sort();

const N = Math.floor(Math.random() * 10),
X = arr[N];

console.log(arr, N, X);

function binarySearch(a, x) {
	
	
	const m = Math.round((a.length - 1) / 2);

}

var index = binarySearch(arr, X);

console.log(arr, index, arr[index])

exports.binarySearch = binarySearch;