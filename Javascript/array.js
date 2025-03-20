// array challenges.

let teaFlavours = ["green tea", "black tea", "oolong tea", "chai tea"];
teaFlavours[0] = "firstTea";
// other ways to access the array
// const firstTea = teaFlavours[0];
console.log(teaFlavours);

other ways to create an array
let teaFlavours = new Array("green tea", "black tea", "oolong tea", "chai tea");

let cities = ["New York", "Los Angeles", "Chicago", "Houston"];
let favoriteCity = cities[2];
console.log(favoriteCity);

let teaTypes = ["herbaltea", "whitetea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin"); // push adds an element to the end of the array

other way
citiesVisited[2] = "berlin";
citiesVisited[citiesVisited.length] = "paris";
console.log(citiesVisited);

let teaOrders = ["chai", "ice tea", "matcha", "earl grey"];
teaOrders.pop(); // pop removes last element of array and returns it
console.log(teaOrders);

let popularTeas = ["green tea", "oolong tea", "chai"];
let copyArray = [...popularTeas];
console.log(copyArray);
diffrent methods fo soft copy of an array
let copyArray = popularTeas.slice();
let copyArray = Array.from(popularTeas);
spread operator (..)

// Ekdam Simple Samjho:
// Soft Copy (Shallow Copy) → Bas reference copy hoti hai (= operator ya .slice(), spread operator ([...arr]))
// Hard Copy (Deep Copy) → Pura naya duplicate bana deta hai (JSON.parse(JSON.stringify(arr)) ya structuredClone(arr))

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = JSON.parse(JSON.stringify(topCities));

console.log(hardCopyCities); // ["Berlin", "Singapore", "New York"]

// merge two arrays use spread operator

let europeanCities = ["Berlin", "Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let mergeCities = [...europeanCities, ...asianCities];
console.log(mergeCities);

// use .length property to get the length of an array
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

// use .inclueds() to check if an element exists in an array
let cityBucketList = ["kyoto", "london", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("kyoto");
console.log(isLondonInList);
