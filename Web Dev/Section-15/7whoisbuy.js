var array = ["Yuvraj", "anmol", "priyah", "aayush", "rohan"];

function payer() {
    var name = Math.floor(Math.random() * array.length);
    var person = array[name];
    return person + " is going to buy lunch today!";
}

console.log(payer());
