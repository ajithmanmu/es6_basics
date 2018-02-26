//ES5 syntax

const result = function (a, b) {
    return a + b;
}

//ES6 syntax

const result = (a,b) => {
    return a + b;
}

const result = (a,b) => a + b; //Implicit return of the function


const numbers = [1, 2, 3];

const double = numbers.map(function(number){
    return number * 2;
});

//Using fat arrows

const double = numbers.map(number => number * 2);

const team = {
    members: ['Aj', 'Ch'],
    teamName: 'Super Six',
    teamSummary: function () {
        return this.members.map(function (member){
            return `${member} is on team -  ${this.teamName}`
        });
    }
};
console.log(team.teamSummary());

//Use Arrow functions to  overcome the above problem of this.teamName undefined. Arrow functions make use of lexical this

const team = {
    members: ['Aj', 'Ch'],
    teamName: 'Super Six',
    teamSummary: function () {
        //Here this === team (lexical this)
        return this.members.map( (member)=>{
            return `${member} is on team -  ${this.teamName}`
        });
    }
};
console.log(team.teamSummary());


const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }


  const profile = {
    name: 'Alex',
    getName: function (){
        return this.name;
    }
};

console.log(profile.getName());


const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};