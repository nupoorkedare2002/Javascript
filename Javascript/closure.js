function outer() {
  let counter = 5;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

// A closure is when a function remembers the variables from its outer scope even after the outer function has finished execution.

// A function inside another function (inner function)
// The inner function remembers variables from the outer function
// Even if the outer function is no longer active, the inner function can still access its variables
