// click to tell age
let SubmitBtn = document.getElementById("submit");
SubmitBtn.addEventListener("click",calculateAge);

// click to clear page
let ClearBtn = document.getElementById("clear");
ClearBtn.addEventListener("click",()=>{
    // clear age
    let Result = document.getElementById("result");
    Result.remove()
    // clears the date
    document.getElementById("Bday").value = "";
})

// funciton to find out age
function calculateAge() {
    // gets birthday
    let BirthDay = new Date(document.getElementById("Bday").value);
    // gets todays date
    let todayDate = new Date();
    //calculats your age 
    let age = todayDate.getFullYear() - BirthDay.getFullYear();
    // months diffrents 
    // will tell if you could be older or younger than the given age becuse when your birthday lies
    let monthDiff = todayDate.getMonth() - BirthDay.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < BirthDay.getDate())) {
        age--;
    }
    // writes to the li that i have blank
    let log = document.getElementById("result");
    // will write your age and tell you if you fit in any of these catagorys
    if (age >= 18 && age < 21){
        log.innerHTML = `
        <h3 id="dis">Age</h3>
        <li id="dis"> -=- ${age} -=-</li>
        <li id="dis">You are 18 or older</li>`;
    } else if(age >= 21 && age < 55){
        log.innerHTML = `
        <h3 id="dis">Age</h3>
        <li id="dis"> -=- ${age} -=-</li>
        <li id="dis">You can buy Alcohol</li>`;
    } else if(age >= 55){
        log.innerHTML = `
        <h3 id="dis">Age</h3>
        <li id="dis"> -=- ${age} -=-</li>
        <li id="dis">You are a senior</li>`;
    } else if(age<18) {
        log.innerHTML = `
        <h3 id="dis">Age</h3>
        <li id="dis"> -=- ${age} -=-</li>
        <li id="dis">You are to young</li>`;
    } else {
        log.innerHTML = `
        <h3 id="dis">Age</h3>
        <li id="dis"> -=- ${age} -=-</li>
        <li id="dis">Inposible</li>`;
    }//end if else tree
}//end funciton



/*
// funciton in case i need all the dates
function todaysDate(year_,month_,day_){
    // todays date
    let today = new Date();
    // gets the current year
    year_ = today.getFullYear();
    // months start at zero so its one month behind
    // so +1 to get the current month
    month_ = today.getMonth() +1;
    // gets the current day
    day_ = today.getDate();

    let formattedDate = `${year_}-${month_}-${day_}`;
    // test to see if working
    console.log(formattedDate);
} //end funciton 
 */