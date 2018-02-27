/*
Refactor the following function to use the rest operator.  
Remember, an argument using the rest operator does *not* need to be called 'rest'.

function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
*/

//REST operator
function product(...numbers) {
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }


//Spread operator
/*
function join(array1, array2) {
    return array1.concat(array2);
  }
*/
function join(array1, array2) {
    return [...array1, ...array2]
  }

// Refactor the following to use the only the rest operator
/*
  function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }
*/

function unshift(array, ...rest) {
    return [...rest, ...array]
  }
