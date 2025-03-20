let x = prompt("Enter a number");

if (typeof x === "number" && !isNaN(x)) {
  console.log("It is a number");
} else {
  console.log("It is not a number");
}
