
let passenger = new Object();

let filled = 0;
let meal = 'None'
let extra = 'None'

document.getElementById("firstName").value = "boi"
document.getElementById("lastName").value = "boi2"


function meal1(){
    meal = "Chicken"
    document.getElementById("test").innerHTML = ("chimken")
}
function meal2(){
    meal = "Fish"
    document.getElementById("test").innerHTML = ("fyshe")
}
function meal3(){
    meal = "Veggies"
    document.getElementById("test").innerHTML = ("veggy")
}

function extra1(){
    extra = "Legroom"
}
function extra2(){
    extra = "Window Seat"
}
function extra3(){
    extra = "Headphones"
}
function extra4(){
    extra = "Extra Food"
}


passenger.name = document.getElementById("firstName").value;
function print(){
    passenger.name = document.getElementById("firstName").value;
    document.getElementById("test").innerHTML = (`${passenger.name}`);
    console.log(`${passenger.firstName}`);
}



passenger.firstName = document.getElementById("firstName").value;;
passenger.lastName = '';
passenger.dOB = '';
passenger.leavingDate = '';
passenger.goingDate = '';
passenger.bags = '';
passenger.meal = `${meal}`;
passenger.extra = `${extra}`;