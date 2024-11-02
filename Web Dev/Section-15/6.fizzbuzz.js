// var output = [];
// var count = 1;

// function fizzbuzz() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//         output.push("Fizz");
//     } else if (count % 5 === 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
// }

// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();



// advance fizzbuzz
var output = [];
var count = 1;

function fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzbuzz();

