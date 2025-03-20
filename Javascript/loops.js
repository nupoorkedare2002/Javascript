// 1. write a while loop that calulates the sum of all
// numbers from 1 to 5 and
// stores the result in a variable named sum

// while loop syntax is:
// while (condition) { code block }

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);

// while loop me sirf condition likhi jati hai (i <= 5).
// i ko explicitly declare karna padta hai loop ke bahar.
// i++ loop ke andar likhna padta hai, nahi to loop infinite chalta rahega.

// 2. write a while loop that counts down from 5 to 1 and
// stores the result in a variable named countDown
let countDown = [];
let i = 5;

while (i >= 1) {
  countDown.push(i);
  i--;
}
console.log(countDown);

//3. write a 'while' loop that counts down from 3 to 1 and
// stores the result in a variable named countDown

let countDown;
let i = 3;
do {
  countDown.push(i);
  i--;
} while (i >= 3);
console.log(countDown);

// 4.write do while loop that prompts a user to enter their favourite tea type
// until they enter "stop" store each tea type in array named teacolletion.

let teaCollection = []; // array to store teatype
let teaType; // variable to store user  input

do {
  tea = prompt(`enter your fav tea(type "stop" to "finish")`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

// 4. write do while loop that adds numbers from 1 to 3 and
// store the result in a variable named total

let total = 0;
let i = 1;

do {
  total += total + 1;
  i++;
} while (i <= 3);
console.log(total);

// 5.write a for loop that multiplies each element in the array [2,4,6] by 2
// and stores the results in  a new array named multipliedNumbers.

// syntax for for loop
//for (initialization; condition; afterthought)
// statement

let array = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < array.length; i++) {
  multipliedNumbers.push(array[i] * 2);
}

console.log(multipliedNumbers);

//6.write a for loop that lists all the cities in the
// array ["paris", "new york", "tokyo", "london"] and
// stores each city in a new array named 'citylist'

let cities = ["paris", "new york", "tokyo", "london"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
