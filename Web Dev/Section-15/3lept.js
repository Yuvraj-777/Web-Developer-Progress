function leap(no) {
    if (no % 400 == 0) {
        console.log("It is a Leap Year");
    } else if (no % 100 == 0) {
        console.log("No Leap Year");
    } else if (no % 4 == 0) {
        console.log("It is a Leap Year");
    } else {
        console.log("No Leap Year");
    }
}

leap(2025); 
