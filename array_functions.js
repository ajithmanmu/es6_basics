let fruits = ['mango', 'apple', 'banana'];

// forEach
fruits.forEach(function(fruit){
    console.log(fruit);
});


var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  
  images.forEach(function(image){
      const area = image.height * image.width;
     areas.push(area); 
  });

  console.log(areas);