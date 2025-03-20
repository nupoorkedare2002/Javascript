// What is a Prototype?
// Every JavaScript object has a hidden property called [[Prototype]], which is a reference to another object (often called the prototype).

// When you try to access a property or method on an object, JavaScript first looks for it in that object.

// If it finds it, it executes it.
// If not, it searches in the object's prototype chain (i.e., its prototype and so on).

let flowers = { petals: 5 };
let rose = {
  color: "red",
};
Object.setPrototypeOf(rose, flowers);

console.log(`rose`, Object.hasOwnProperty(flowers));

//instead of writing __proto__ we use below methods for prototyping
// Object.setPropertyOf() If we access rose.petals, JavaScript will look into rose first, and if not found, it will check its prototype (flowers).
//Object.getPropertyOf()  This confirms that flowers is the prototype of rose.

//Object.hasOwnProperty ()  It only checks for direct properties, not prototype properties.
// Object.setPrototypeOf(obj, prototype) → Sets the prototype of obj.
// Object.getPrototypeOf(obj) → Gets the prototype of obj.
//  obj.hasOwnProperty("prop") → Checks if prop exists directly inside obj, NOT in its prototype.
