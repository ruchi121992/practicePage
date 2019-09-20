//Spread Function Example
function sum(x,y,z)
{
	return x+y+z;
}

const numbers =[1,2,3];

console.log(sum(...numbers))

//console.log(sum(numbers[0],numbers[1],numbers[2]))


//concatinate two arrays using spread

var a = [25,78];

var b = [10,20];

var c = [...a,...b]

console.log(c);