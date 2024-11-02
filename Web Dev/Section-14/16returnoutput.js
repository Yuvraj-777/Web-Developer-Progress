function getmilk(money){
    var noofbottle = money / 1.5;
    console.log("Leave House");
    console.log("Move Left");
    console.log("Move Right");
    console.log("Move Left");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Enter Shop");
    console.log("No of Bottle is " + noofbottle)
    console.log("Leave shop");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Right");
    console.log("Move Left");
    console.log("Move Right");
    console.log("Enter House");
    return money % 1.5;
}

var change = getmilk(4);
console.log(change);