//program to store users address

let allUserAddress = []

let storeUserAddress = (userId,...addressToStore) =>{

	console.log(userId)

	console.log(addressToStore)
	
	//allUserAddress.push({userId:userId,userAddress:addressToStore})		//shortcut Method

	let customAddress = {userId:userId,userAddress:addressToStore}

	allUserAddress.push(customAddress)

	console.log(allUserAddress)
	
	return allUserAddress

}		//end user address function

let firstAddress = {

		"streetAddress":"Some streetAddress",
		"city":"Faridabad",
		"state":"Hariyana",
		"pincode":"214066",
		"country":"India"

}

let secondAddress = {

		"streetAddress":"B Block Gate No4",
		"city":"Rudrapur",
		"state":"Uttarakhand",
		"pincode":"263153",
		"country":"India"

}

storeUserAddress("Ruchi Rathore 12",firstAddress,secondAddress)