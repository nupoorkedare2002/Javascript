// Encapsulation is nothing but it restricting direct access to
// some of object properties or data objects

// the essence of encapsulation—instead of exposing data directly,
// we provide controlled access through methods.

class BankAccount {
  #balance = 120; // here #balce is private field

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// account.#balance = 500; //This fails because #balance is private.
// Instead, getBalance() is the only way to read the balance.
// console.log(account.getBalance());

//explination of code

//1. first created class named class BankAccount
//2. then within the class decalred private field name #balance.
//3. aasigned a value to the #balance =120;
//4. declared a function named deposit within the class
//5. passed and amount parameter in deposit function.
//6.then using the this initalized the this.#balace with the amount
//7.then returned the #balance
//8.decalred getBalance () method
//9. within the method returned the $ string with `$ ${this.#balance}`;
//Encapsulation is used here because we are accessing the balance indirectly through the
// getBalance() method instead of directly modifying #balance
// from outside the class
// 10. created new BankAccount() var function
//11. console log the account var with the getBakance method() so we can get the balance amount we created in class
// and the string we created in getBalance method

//******************** ABSTRACTION IN JS**************************//

class CofffeMachine {
  start() {
    //call DB
    // filter value

    return `starting the machine...`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee...`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone}  ${msgTwo}`;
  }
}

let myMachine = new CofffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//1. created the class named CoffeMachine declared a start method within it
// 2. here is the thing within the start method The start() method might include database
// calls or filtering logic, but abstraction hides this from the user.
// with the help of abstraction it will hide it and it will only the the "starting the machine...`" statement.
//3. similarlily for brewcoffe()
//4. then what i did is created one pressstarteButton method
//5.wothin that stored the both above method in var of msgine and msgtwo
//.6.returned it
// 7. created obj Coffemachine in myMachine var
// then remeber in 2. what i explained i storeed the both method start and brewcoffe in pressstartbutton so i dont have to write the sepraate console log for them instead i will only console log pressstartbutton
// 9. it will give me the similar output

/* EXAMPLE OF BOTH ENCAPSULATION AND ABSTRACTION */

class AtmMachine {
  #balance = 40000; // encapsulation (private property)

  #insertCard() {
    return `card has been inserted...`;
  } // Abstraction (hiding complextiy)

  checkBalance(amount) {
    this.#balance += amount;
    return `balnce displayed! current balance is : ${this.#balance}`;
  }
  // controlled access to private data

  getBalance() {
    return `Balance : ${this.#balance}`;
  }
  // enapsulation

  startAtm() {
    if (this.#balance > 0) {
      return `${this.#insertCard()} enter the amount..!`;
    } else {
      return "pls reinsert your card!";
    }
  }
}

let myAtm = new AtmMachine();
// console.log(myAtm.getBalance());
// console.log(myAtm.startAtm());
// console.log(myAtm.checkBalance(2000));
// console.log(myAtm.startAtm());

//***********POLYMORPHISM*********//

// THE ability of somthing to have or
// to be dispalyed in more than one form
//POLY means many
// morphism means structure

class Bird {
  fly() {
    return `i am flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `i cant fly...`;
  }
}
class Eagle extends Bird {
  fly() {
    return `I soar high in the sky!`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
let eagle = new Eagle();
// console.log(bird.fly());
// console.log(penguin.fly());
// console.log(eagle.fly());

// method name is same but the behaviour is diffrent

/* Static Method */
// static can be anything by means
// method or properties or var and constant

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// console.log(Calculator.add(3, 4));

/* Getters and Setters */

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    } else {
      this._salary = value;
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `you are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("nupoor", -50000);
console.log(emp._salary);
emp.salary = 45000;
