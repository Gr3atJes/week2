var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//function calling
function getName() {
    var century = parseInt(document.getElementById("CENTURY").value);
    var year = parseInt(document.getElementById("YEAR").value);
    var month = parseInt(document.getElementById("MONTH").value);
    var day = parseInt(document.getElementById("DAY").value);
    var male = document.getElementById("MALE");
    var female = document.getElementById("FEMALE");

}
//validation
if (day <= 0 || day > 31)
    alert("invalid option please enter a valid date");
else if (MONTH <= 0 || MONTH > 12 || MONTH == 2 && DAY > 29)
    alert("invalid option please enter a valid date");

    var day = new Date(CENTURY + "/" +YEAR + "/" + MONTH+ "/" +DAY );
    var birthDay=day.getDay();
    if(male.checked==true){
       alert("You were born on " +weekDay[birthDay]+ " and Your Akan name is " + maleNames[birthDay])
    }
    else if(female.checked==true){
       alert("You were born on " +weekDay[birthDay]+ " and Your Akan name is " + femaleNames[birthDay])
    }
    
