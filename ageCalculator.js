/*Write a function calculateAge() that takes your birthday in the format dd,mm,yyyy
 and returns your age.
Sample function input
calculateAge(28,02,1992)
Output - 27
*/

let calculateAge = function(day, month, year) {
  // start your code here.
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    console.log(currentDate)
    console.log(currentDay)
    console.log(currentMonth)
    console.log(currentYear)

    let personsBirthDate = day;
    let personsBirthMonth = month;
    let personsBirthYear = year;

    console.log(personsBirthYear)
    console.log(personsBirthMonth)
    console.log(personsBirthDate)

    let personsAge = currentYear-personsBirthYear;

    console.log(personsAge)
            
            if(personsBirthMonth > currentMonth || personsBirthMonth == currentMonth ){
                return personsAge-1;
            }
            else {
                return personsAge;
                
            }
};
calculateAge(18,07,1992);

//module.exports = { calculateAge: calculateAge };