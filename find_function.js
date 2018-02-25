var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
  ];

function findWhere(array, criteria) {
    return array.find(function(element){
        const property = Object.keys(criteria)[0];
        return element[property] === criteria[property];
    });
}

var ladder = findWhere(ladders, { height: 25 });
console.log(ladder);
