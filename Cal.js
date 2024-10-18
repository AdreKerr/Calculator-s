//make it work

//text showen
let screen1 = document.querySelector(".clear");
screen1.addEventListener("click",clear);

// equal sign
let sovleEqual = document.querySelector(".equal");
sovleEqual.addEventListener("click",solve);



// functions for the calclator
// display screen
function display(val) {
    document.getElementById("result").value += val;
}//end funtion display
// solve equation
function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}//end fucntion solve
// clear screen
function clear() {
    document.getElementById("result").value = "";
}//end funciton clear







//solve
//array?
/*
let equasion = [,,];
num 1 = equasion[0];
num 2 = equasion[1];
num 3 = equasion[2];
*/