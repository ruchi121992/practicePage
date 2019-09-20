
//var generateEmail= function(name,message)

let generateEmail = (name,message) =>
{
	let emailMessage = 'Hi ' +name+"\n"+"This is the message we have for you - \n" +message+"\n copyright @edwisor 2018"
	return emailMessage

}	//end generate email.

console.log(generateEmail("Ruchi Rathor","Welcome To Uttarakhand."))
