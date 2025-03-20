const person = {
  name: "nupoor",
  greet() {
    console.log(`Hi ,I am ${this.name}`);
  },
};
person.greet();
const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "kedare" });
boundGreet();

// bind : func.bind(context)
// Returns a new function with this set permanently
// call  : func.call(context, arg1, arg2, ...)
// Calls function immediately, passing arguments one by one
// apply : func.apply(context, [arg1, arg2, ...])
// Calls function immediately, passing arguments as an array
