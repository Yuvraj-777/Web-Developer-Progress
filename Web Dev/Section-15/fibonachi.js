
function fibonacciGenerator(n){
    var output = []
    if(n == 1) {
        output.push(0)
    }
    else if (n == 2 ) {
        output.push(0,1)
    }
    else {
        output.push(0,1)
    }

    for(i=2; i<n; i++){
        output.push(output[output.length - 1] + output[output.length - 2]);
    }
    console.log(output);
    return output;

}


fibonacciGenerator(5);