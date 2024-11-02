function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height / 100, 2);
    bmi = Math.round(bmi);
    var val = "";
    
    if (bmi < 18.5) {
        val = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        val = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        val = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return val;
}

console.log(bmiCalculator(60, 180));


// write answer as per angela interpreter
// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     bmi = Math.round(bmi);
//     var val = "";
    
//     if (bmi < 18.5) {
//         val = "Your BMI is " + bmi + ", so you are underweight.";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         val = "Your BMI is " + bmi + ", so you have a normal weight.";
//     } else if (bmi > 24.9) {
//         val = "Your BMI is " + bmi + ", so you are overweight.";
//     }
    
//     return val;
// }

