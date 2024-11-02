/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 
 
 /**
  * First Method
function main(){
fourmove();
turnLeft();
fourmove();
turnRight();
}

function fourmove() {
move();
move();
move();
move();
}
 **/
 
/**
 * Second Method
function main(){ 
move();
turnLeft();
move();
turnRight();
putBeeper();
move();
turnLeft();
move();
turnRight();
putBeeper();
move();
turnLeft();
move();
turnRight();
putBeeper();
move();
turnLeft();
move();
turnRight();
putBeeper();
}

 **/
 
/**
 * Third Step
 
function main(){
putBeeper();
step();
step();
step();
step();
}

function step(){
move();
turnLeft();
move();
turnRight();
putBeeper();
}

**/

/**
 * Chess Pattern
 **/
 
function main(){
step();
step();
final();


}

function step(){
putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();
turnLeft();
move();
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
move();
turnRight();
move();
turnRight();
}

function final(){
putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();
}


// WebLink https://stanford.edu/~cpiech/karel/ide.html