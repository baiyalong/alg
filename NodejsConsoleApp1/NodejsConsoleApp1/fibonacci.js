//fibonacci
//n

'use strict'
const N = 100;

function fibonacci(n) {
	if (n == 1 || n == 2)
		return 1;
	
	let p=1,q=1,r=0;
	for (let i=3; i <= n; i++) {
		r = p + q;
		p = q;
		q = r;
		console.log(r);
	}
	return r;
}

var res = fibonacci(N);
console.log(res);


exports.fibonacci = fibonacci;
