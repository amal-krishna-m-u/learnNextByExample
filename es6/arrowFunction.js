//so far we where writing functions with keyword function,now instead of that we can use arrow functions to write functions

const newfun = () => {
  console.log("This is from newfun,demo on how to write arrow function");
};

newfun();

//mainly it's usefull in callback functions for example

// previously this is how we used to write such functions

function add(...nums) {
  let total = nums.reduce(function (x, y) {
    return x + y;
  });
  console.warn("old method");
  console.log(total);
}

add(1, 2, 3, 4, 5);

// but the better way to do it is
// using the arrow fucntion

const addNum = (...nums) => {
  let total = nums.reduce((x, y) => x + y);
  console.warn("New method");
  console.log(total);
};

addNum(100, 200, 300, 400);
