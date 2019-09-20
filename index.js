/*
complete the function returnLength() taht takes one rest parameter and returns the length of the array of parameters received.

Sample Input : returnLength('a,'b,'c')

Output - 3

*/



let array = []
let returnLength =(...input)=>{
	//start your code here.
	let array = input
	console.log(array.length)
	return array

};	//end return length

returnLength('a','b','c')
module.exports = {returnLength:returnLength};
