//Party Planner People List

let allPeopleIWantToInvite = []
 
let pushToPartyList = (...people) => {

	let newPeopleArray = people
	allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray)
	console.log(allPeopleIWantToInvite)
	return allPeopleIWantToInvite;
}

pushToPartyList("Ruchi","Sudhanshu","Himanshu")
pushToPartyList("Komal","Madhu","Reetika")

