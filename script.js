
let passenger = new Object();

let filled = 0;

let meal = ''
let extra = ''

let cost = 300;

document.getElementById("firstName").value = "Ethaniel"
document.getElementById("lastName").value = "Botello"
document.getElementById("going").value = "Phoenix"
document.getElementById("leaving").value = "LA"
document.getElementById("bags").value = 0


function meal1(){
    meal = ``
    meal += "Chicken "
}
function meal2(){
    meal = ``
    meal += "Fish "
}
function meal3(){
    meal = ``
    meal += "Veggies "
}

function extra1(){
    extra = ``
    extra += "Legroom "
}
function extra2(){
    extra = ``
    extra += "Window Seat "
}
function extra3(){
    extra = ``
    extra += "Headphones "
}
function extra4(){
    extra = ``
    extra += "Extra Food "
}


function print(){
    if(added == true){
        document.getElementById("fname").innerHTML = (`First Name: ${passenger.firstName}`);
        document.getElementById("lname").innerHTML = (`Last Name: ${passenger.lastName}`);
        document.getElementById("d-o-b").innerHTML = (`Date of Birth${passenger.dOB}`);
        document.getElementById("leaving-from").innerHTML = (`Leaving from: ${passenger.leaving}`);
        document.getElementById("going-to").innerHTML = (`Destination: ${passenger.going}`);
        document.getElementById("leaving-date").innerHTML = (`Departure date:${passenger.leavingDate}`);
        document.getElementById("return-date").innerHTML = (`Return date: ${passenger.returnDate}`);
        document.getElementById("bag-amount").innerHTML = (`Bag amount: ${passenger.bags}`);
        document.getElementById("req-meal").innerHTML = (`Ordered meal: ${passenger.meal}`);
        document.getElementById("req-extra").innerHTML = (`Extra services: ${passenger.extra}`);
        document.getElementById("cost").innerHTML = (`Cost: $${passenger.cost}`)
        }

}

let added = false;

function add(){
    if(added == false){
        document.getElementById("add").innerHTML = ("Reset")
        passenger.firstName = document.getElementById("firstName").value;
        passenger.lastName = document.getElementById("lastName").value;
        passenger.dOB = document.getElementById("dOB").value;
        passenger.leaving = document.getElementById("leaving").value
        passenger.going = document.getElementById("going").value
        passenger.leavingDate = document.getElementById("leavingDate").value;
        passenger.returnDate = document.getElementById("returnDate").value;
        passenger.bags = document.getElementById("bags").value;
        passenger.meal = meal;
        passenger.extra = extra;

        let bags = passenger.bags;
        let bagCost = bags * 20;

        cost += bagCost;

        passenger.cost = cost;

        added = true;

        let none = `None`
        if(meal == ``){
            meal = none;
        }
        if(extra == ``){
            extra = none;
        }

        passenger.meal = meal;
        passenger.extra = extra;
    }else if(added == true){
        meal = ``;
        extra = ``;
        cost = 300;
        document.getElementById("add").innerHTML = ("Add")
        passenger.firstName = document.getElementById("firstName").value = ('');
        passenger.lastName = document.getElementById("lastName").value = ('');
        passenger.dOB = document.getElementById("dOB").value = ('');
        passenger.leaving = document.getElementById("leaving").value = ('');
        passenger.going = document.getElementById("going").value = ('');
        passenger.leavingDate = document.getElementById("leavingDate").value = ('');
        passenger.returnDate = document.getElementById("returnDate").value = ('');
        passenger.bags = document.getElementById("bags").value = ('');
        passenger.cost = cost
        added = false;
    }
}
