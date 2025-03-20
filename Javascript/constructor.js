//step 1 : create a function and pass parameter in it
function Flowers(types) {
  this.types = types; // Step 2: Assign parameter to 'this'
}
// Step 3: Add method to the prototype
Flowers.prototype.color = function () {
  return `${this.types} is red`; // Step 4: Use this.types
};
// Step 5: Create an instance of Flowers
let rose = new Flowers("rose");
console.log(rose.color()); // Step 6: Call the color function
// Output: "rose is red"

// 1️⃣ First, I created a function named Flowers and passed a parameter types into it.

// 2️⃣ Inside the function, I assigned this.types = types, so that every object created using Flowers will store the types value inside the object.

// 3️⃣ Then, instead of adding the color function inside the constructor, I added it to the prototype of Flowers using Flowers.prototype.color. This makes sure that all objects created from Flowers can access this method without duplicating it for each instance.

// 4️⃣ Inside the color function, I returned a string that uses this.types (which refers to the specific flower type) and added "is red" at the end.

// 5️⃣ To test the function, I created a variable rose and assigned it a new instance of Flowers using new Flowers("rose").

// 6️⃣ Since color is a function, I called it using rose.color() inside console.log(), which prints:
// "rose is red" ✅
