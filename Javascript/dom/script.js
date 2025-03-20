// alert("connected");
// DOM MANIPULATION
//1.Get the element
//2.Event listening

//EX: 1 Accessing the DOM
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // if want to know where the event is going on you have to used the
    //  higher order function / function name instead of arrow function
    // if using function it will point towards the current context
    // whenever using arrow function () => it is pointing towards the
    // global context `this` thats why in the console we see window{properties}

    let paragraph = document.getElementById("myparagraph");
    // we can also access the paragragraph properties like below

    // console.log(paragraph.textContent);
    // instead of doing console log we can directlychange through textcontext properties
    // NOTE  : it will do the changes in html file.
    paragraph.textContent = "the para is changed!";
  });

// EX: 2 Traversing the DOM

document
  .getElementById("highlightFirstCity")
  // use function instead arrow function because it gives
  // in context to who you are calling it
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(hold);
    citiesList.firstElementChild.classList.add("highlight");
  });

// ex:3
document.getElementById("changedOrder").addEventListener("click", function () {
  let coffeType = document.getElementById("coffeType");
  // by the follwoing type of properties you can manipulate the element , using style allows to use css properties
  coffeType.textContent = "Espresso";
  coffeType.style.backgroundColor = "brown";
  coffeType.style.backgroundColor = "brown";
  coffeType.style.color = "white";
  coffeType.style.padding = "5px";
});

// ex:4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li"); // with createelement can create any item li,h1,h2 etc..
  newItem.textContent = "Eggs";

  document.getElementById("ShoppingList").appendChild(newItem);
});

// EX : 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// ex : 6 event handling

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

// ex : 7 event delegation

document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// ex : 8 Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// ex: 9 DOM content loaded

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// ex: 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
