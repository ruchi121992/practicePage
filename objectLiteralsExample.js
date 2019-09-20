//calculations Inside An Object

let actualPrice = 10000;
let discountPercentage = 10;

let priceOfProduct = {
	actualPrice,
	discountPercentage,
	calculateFinalPrice(){
		return actualPrice -((actualPrice*discountPercentage)/100)
	}
}

console.log(priceOfProduct)
console.log(priceOfProduct.calculateFinalPrice())

//Getting Full NAme Method Iside An Object

let firstName = "Sudhanshu";
let lastName = "Singh";

let nameOfPerson = {
	firstName,
	lastName,

	calculateFullName(){
		return firstName+" "+lastName
	}
}

console.log(nameOfPerson.calculateFullName())

//simple example for object Literals

let keyIAmStoring = "Some Key";

let valueIAmStoring = "Some Value";

//let finalObject={keyIAmStoring:valueIAmStoring}

let finalObject={[keyIAmStoring]:valueIAmStoring}

console.log(finalObject)


