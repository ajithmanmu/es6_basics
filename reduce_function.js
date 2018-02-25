var numbers = [10, 20, 30];

var sum = numbers.reduce(function(sum, number){
return sum += number;
}, 0);

//console.log('sum', sum);

function balancedParanthesis(string){
    //console.log(string.split(''));

    return !string.split('').reduce(function(previous, elem){
        if(previous < 0) return previous;
        if(elem === '(') return ++previous;
        if(elem === ')') return --previous;
        return previous;
    }, 0);

}

var res = balancedParanthesis(')(()');
//console.log('res', res);


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(previous, trip){
    return previous = previous + trip.distance; 
},0);

//console.log('totalDistance', totalDistance);

/*
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
The object returned should have the form '{ sitting: 3, standing: 2 }'.  
The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous, desk) {
      if(desk.type === 'sitting'){ 
        ++previous.sitting
    };
    if(desk.type === 'standing'){ 
        ++previous.standing
    };
    return previous;
  }, { sitting: 0, standing: 0 });

  // console.log('deskTypes', deskTypes);

/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/

function unique(array){
    var res = array.reduce(function(accum,elem){
        // console.log('accum', accum);
        // console.log('elem', elem);
        // find elem in accum -- then add if not exist
        var res = accum.find(function(num){
            return num === elem;
        });
        if(res === undefined){accum.push(elem);}
        return accum;
    }, []);
    return res;
}

var numbers = [1, 1, 2, 3, 4, 4];
var result = unique(numbers);
console.log('result', result);