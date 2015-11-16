//insertion sort 
//n^2

'use strict'

var a = require('./testArray');

function insertionSort(a){

	for (let i = 1; i < a.length; i++) {
		for (let j = 0; j < i; j++) {
			if(a[i]<a[j]){
				let tmp = a[i];
				for(let k=i;k>j;k--){
					a[k] = a[k-1];
				}
				a[j] = tmp;
				break;
			}
		}
		console.log(a)
	}

	return a;
}

insertionSort(a);
console.log(a)

exports.insertionSort = insertionSort;