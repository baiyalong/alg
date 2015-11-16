//binary search
// logn

'use strict'

var arr = require('./testArray.js');
arr.sort();

const N = Math.floor(Math.random() * 10),
X = arr[N];

console.log(arr, N, X);

function binarySearch(a, l, r, x) {
	
	if (r - l == 1 && x == a[l])
		return l;
	
	const m = Math.round((r + l) / 2);
	let res = 0;
	if (a[m] > x)
		res = binarySearch(a, l, m, x);
	else
		res = binarySearch(a, m, r, x);
	
	return res;
}

var index = binarySearch(arr, 0, arr.length, X);

console.log(arr, index, arr[index])

exports.binarySearch = binarySearch;