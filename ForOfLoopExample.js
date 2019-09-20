//for of loop examples
let customers=[{
	'customerId':'12',
	'signUpDate':'2017-12-20'},
	{
	'customerId':'34',
	'signUpDate':'2019-07-25'
	}
]

/* for in loop example with array
for(x in customers){
	console.log(customers[x].customerId)
	console.log(customers[x].signUpDate)
	console.log(customers[x])
*/

	// for in loop example with array
for(x of customers){
	console.log(x)
}




//for in loop example with object.

let singleUser = {
	name : "Ruchi",
	Email : "ruchirathore.3@gmail.com",
	mobileNumber: 9625849603
}
 for(x in singleUser){
 	console.log(singleUser[x])
 }

//for of loop never works with object
 for(x of singleUser){
 	console.log(x)
 }