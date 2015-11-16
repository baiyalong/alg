//x^n
//logn

'use strict'

function rand() {
	return Math.round(Math.random() * 10);
}

const X = rand(),
N = rand();

console.log(X, N, Math.pow(X, N));

function xn(x, n) {
	if (n == 0)
		return 1;
	if (n == 1)
		return x;
	
	if (n % 2) {
		let s = xn(x, (n - 1) / 2);
		return s * s * x;
	} else {
		let s = xn(x, n / 2);
		return s * s;
	}

}

var res = xn(X, N);
console.log(res);


exports.xn = xn;