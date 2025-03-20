// 1. write a function to multiply 2 numbers and return its result.

function multiplyTwoNumbers(a, b) {
  return a * b;
}
let result = multiplyTwoNumbers(3, 3);
console.log(result);

//2. write a function to return
// sum of three numbers

function sumOfNum(...nums) {
  let sum = 0;
  //  for .. of loop  Ye ek iterative loop hai jo arrays, strings, aur iterable objects ke values ko
  //   directly access karne ke liye use hota hai.
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumOfNum(1, 2, 3));

// 3. write a function which will return largest value of array

function largestNum(...nums) {
  let max = num[0];
  for (let num of nums) {
    if (num > max) {
      // Agar num max se bada hai
      max = num; // Toh max ko update kar do
    }
  }
  return max; // Final max return karo
}
console.log(largestNum(4, 6, 88));

// 4. function to covert string into uppercase
function toUpperCaseString(str) {
  return str.toUpperCase();
}

console.log(toUpperCaseString("hello"));

// 5.  function to return minimum value in array

function maxNum(...nums) {
  let min = nums[0];
  for (let num of nums) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(maxNum(44, 66, 88));

//6. function to product of of numbers

function prodcutNum(...nums) {
  let product = 1;
  for (let num of nums) {
    product = product * num;
  }
  return product;
}
console.log(multiplyAll(2, 3, 4));

//.7 top scorer
const students = {
  Rahul: 85,
  Priya: 92,
  Aman: 78,
  Sneha: 95,
};

function topScorer(obj) {
  let topStudent = "";
  let maxMarks = -Infinity;

  for (let student in obj) {
    if (obj[student] > maxMarks) {
      maxMarks = obj[student];
      topStudent = student;
    }
  }
  return topStudent;
}

console.log(topScorer(students));

//8. function makeTea parameter "typeOfTea" return string
// "making green tea"  when called with "green tea"
// store result in var named "teaOrder"

function makeTea(typeOfTea) {
  return `making ${typeOfTea}`; //template literals (backticks ``) ka use hai,
  // jo string interpolation karta hai.
  // making ${typeOfTea} ka matlab hai ki ${} ke andar
  // variable ka value aa jayega.

  // console.log(test); no code will be exucuted after return statement
}

let teaOrder = makeTea("lemonTea");
console.log(teaOrder);

// 9. create a function named `order tea` that
//takes one parameter , `teatype` inside this function
//create another function named `confirmedorder` that returns a
//message like `order confirmed for chai`.
//call `confirmorder` from within `ordertea` and return the result

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("masala chai");
console.log(orderConfirmation);

//10.arrow function () => {}

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100);

//11. uppercase string return arrow function

const upperCase = (str) => str.toUpperCase();
console.log(upperCase(nupoor));

// 12. write arrow function which will return sum of 2 num

const sumOfTwoNum = (a, b) => a + b;
console.log(sumOfTwoNum(2, 3));

//13. write arrow function that will retrun max num from array

const maxNum = (arr) => Math.max(...arr);
//  Math.max() function ka use karenge
// jo sabse bada number return karega.
// 3️Kyunki Math.max() direct array accept nahi karta,
// spread operator (...) ka use karenge.
console.log(maxNum([4, 5, 6, 77, 8, 9]));

//14. write arrow function that will retrun min num from array

const minNum = (arr) => Math.min(...arr);
console.log(minNum([2, 56, 788, 1, 0]));

//15. max num using reduce()
const maxNum = (arr) => arr.reduce((max, num) => (num < max ? num : max));
console.log(maxNum([2, 56, 788, 1, 0])); // Output: 0

//16.calculate average(mean) of an array using reduce method

const avgCalculator = (arr) =>
  arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log(avgCalculator([2, 56, 788, 1, 0]));

//17.reduce to calculate prodcut of array element

const productOfNum = (arr) => arr.reduce((sum, num) => (sum += num));
console.log(productOfNum([1, 2, 3, 4, 5]));

// 18. redcue for even num prodcut in an array
const productOfEvenNum = (arr) =>
  arr
    .filter((num) => num % 2 === 0) // Even numbers filter
    .reduce((product, num) => product * num, 1); // Multiply them

console.log(productOfEvenNum([2, 4, 6, 8])); // Output: 384

//19. for odd numbers
const sumOfOddNum = (arr) =>
  arr
    .filter((num) => num % 2 !== 0) // Sirf odd numbers le raha hai
    .reduce((sum, num) => sum + num, 0); // Unka sum kar raha hai

console.log(sumOfOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 25
