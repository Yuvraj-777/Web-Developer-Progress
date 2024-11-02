function Lifeinweek(age){
    var yearleft = 90 - age;
    var days = yearleft * 365;
    var weeks = yearleft * 52;
    var month = yearleft * 12;

    console.log("Days Left are:- "+ days + " Weeks Left are:- "+ weeks + " Month Left are:- " + month);
}

Lifeinweek(22);