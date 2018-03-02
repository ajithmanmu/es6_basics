const companies = [
'Google',
'Facebook',
'Apple'
];

//Array destructuring

const [ name, ...rest] = companies;

console.log(name);
console.log(rest);

//Object destructuring - length is a property of the Array object

const { length } = companies;
console.log(length);


const points = [
    [4,5],
    [2,0],
    [12,43]
];

const formattedPoints = points.map( ([x, y]) =>{
return {x,y};
});

console.log(formattedPoints);

/*
The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  
Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  
Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?
*/
const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer({title,department}) {
    return title === 'Engineer' && department === 'Engineering';
  }

  const myres= isEngineer(profile);
  console.log(myres);
  
/*
The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  
Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' 
and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/


  const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes.map( ([subject, time, teacher]) => {
    return {subject, time, teacher};
  });
  console.log(classesAsObject);

/*
Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will 
return a new array with all values inside of it multiplied by two.  
Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy 
but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]
*/

const numbers = [1, 2, 3];

function double([first, ...rest]) {
    if(!first){return []};
    return [first*2,...double(rest)];    
}

const doubledres = double([1,2,3]);
console.log(doubledres);


