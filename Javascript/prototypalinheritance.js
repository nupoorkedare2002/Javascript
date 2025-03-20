function Person(name) {
  this.name = name;
}

// prototype chain
Person.prototype.greet = function () {
  console.log(`Hello,my name is nupoor ${this.name}`);
};

let nupoor = new Person("nupoor");
nupoor.greet();

// object ihnerits properties from other objects via prototype chain.
