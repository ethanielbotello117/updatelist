
let passenger = new Object();

let filled = 0;

let meal = ''
let extra = ''

document.getElementById("firstName").value = "Ethaniel"
document.getElementById("lastName").value = "Botello"
document.getElementById("going").value = "Phoenix"
document.getElementById("leaving").value = "LA"
document.getElementById("bags").value = 100


function meal1(){
    meal += "Chicken "
}
function meal2(){
    meal += "Fish "
}
function meal3(){
    meal += "Veggies "
}

function extra1(){
    extra += "Legroom "
}
function extra2(){
    extra += "Window Seat "
}
function extra3(){
    extra += "Headphones "
}
function extra4(){
    extra += "Extra Food "
}


function print(){
    if(added == true){
            document.getElementById("fname").innerHTML = (`${passenger.firstName}`);
        document.getElementById("lname").innerHTML = (`${passenger.lastName}`);
        document.getElementById("d-o-b").innerHTML = (`${passenger.dOB}`);
        document.getElementById("leaving-from").innerHTML = (`${passenger.leaving}`);
        document.getElementById("going-to").innerHTML = (`${passenger.going}`);
        document.getElementById("leaving-date").innerHTML = (`${passenger.leavingDate}`);
        document.getElementById("return-date").innerHTML = (`${passenger.returnDate}`);
        document.getElementById("bag-amount").innerHTML = (`${passenger.bags}`);
        document.getElementById("req-meal").innerHTML = (`${passenger.meal}`);
        document.getElementById("req-extra").innerHTML = (`${passenger.extra}`);
        }
        if(meal == ''){
            meal = 'None'
        }
        if(extra == ''){
            extra = 'None'
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
        added = true
    }else if(added == true){
        meal = '';
        extra = '';
        document.getElementById("add").innerHTML = ("Add")
        passenger.firstName = document.getElementById("firstName").value = ('');
        passenger.lastName = document.getElementById("lastName").value = ('');
        passenger.dOB = document.getElementById("dOB").value = ('');
        passenger.leaving = document.getElementById("leaving").value = ('');
        passenger.going = document.getElementById("going").value = ('');
        passenger.leavingDate = document.getElementById("leavingDate").value = ('');
        passenger.returnDate = document.getElementById("returnDate").value = ('');
        passenger.bags = document.getElementById("bags").value = ('');
        passenger.meal = meal;
        passenger.extra = extra;
        added = false;
    }
}
