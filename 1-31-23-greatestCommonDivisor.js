// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper! 

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)


// Hint:  see if what number divides evenly into both numbers. Start high and go low! recursive = return y == 0 ? x : mygcd(y, x % y)

console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)

//start w biggest number and see if it goes into any of the other numbers evenly. when it goes into both evenly, you have arrived at your solution, the GCD!

//we need to account for only receiving numbers that HAVE a greatest common divisor. 

function mygcd(x, y) {
    for (let i = Math.min(x,y); i > 0; i--){
        if( x % i === 0 && y % i === 0){
            return i
        }
    }
}

//there's a very special algo that's commonly used for this solution:

//recursion tomorrow, btw. 2/1/23

// first number (30) 30 = 12 * q + remainder
//      12 * 2 + 6   THE EUCLIDIAN ALGORITHM. see: khanacademy link