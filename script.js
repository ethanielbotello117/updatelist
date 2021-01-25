
let passenger = new Object()

passenger.firstName = 'Fred'

let hello = passenger.firstName;

console.log(`first name is ${hello}`);

function print(){
    let name = document.getElementById("dOB").value;
    document.getElementById("test").innerHTML = (`You were born on ${name}`)
}