//test random array

'use strict'

const N = 10,
	M = 100;
let arr = new Array(N);

for (let i=0; i < N; i++) {
	arr[i] = Math.round(Math.random() * M);
}

console.log(arr);

module.exports = arr;