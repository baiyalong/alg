//merge sort 
//n*lgn

'use strict'

var arr = require('./testArray');

function mergeSort(a) {
	
	if (a.length == 1) {
		return a;
	}
	
	const m = Math.round(a.length / 2);
	let l = mergeSort(a.slice(0, m));
	let r = mergeSort(a.slice(m, a.lenght));
	
	let b = [];
	for (let i=0,j=0; i <= l.length || j <= r.length;) {
		if (i == l.length) {
			b = b.concat(r.slice(j));
			break;
		}
		if (j == r.length) {
			b = b.concat(l.slice(i));
			break;
		}
		if (l[i] < r[j]) {
			b.push(l[i]);
			i++;
		} else {
			b.push(r[j]);
			j++;
		}
	}
	
	console.log(b)
	return b;

}

var b = mergeSort(arr);
console.log(b);

exports.mergeSort = mergeSort;