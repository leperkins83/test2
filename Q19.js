// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
//
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.

var maxOf2 = function(num1, num2) {
  if(num1 === num2) {
    return "equal";
  }
  else if(num1 > num2) {
      return num1
  }
  else {
    return num2;
  }
}
console.log(maxOf2(5, 1));
console.log(maxOf2(5, 5));
console.log(maxOf2(-4, -3));
