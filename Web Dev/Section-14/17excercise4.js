function bmi(weight, height) {
  var height = height / 100;
  var cal = weight / (height * height);
  // return cal.toFixed(2); // used to get 2 digit after decimal or 3 depend on you
  return Math.round(cal);
}

console.log (bmi(60, 180));

/*
//BEST METHOD AS PER ANGELINA CONSOLE WHICH IS PIECE OF SHIT SO I DONT CARE

function bmiCalculator(weight, height) {
return weight / (height * height);
}

console.log (bmiCalculator(65, 1.8));



 */