//Example of Template Literals

let a="This a first paragraph i m writing right now"
let b="This is the second paragraph,in which we will test the template Literals."

let combinedSentence = `${a}.${b}`

console.log(combinedSentence)

// generateEmail using template literals

let generateEmail = (firstName,lastName,message) =>
{
	let emailMessage = `Hi ${firstName+" "+lastName}\n\n   This is the message we have for you.\n\n   ${message}\n\n   copyright @edwisor 2018`
	return emailMessage

}	//end generate email.

console.log(generateEmail("Ruchi","Rathor","Welcome To Uttarakhand."))


// If u want to use template literals as a documentaion

let someTextWithCurlyBraces = `This is the code with the curly Braces \${Here is the text}`

console.log(someTextWithCurlyBraces)
