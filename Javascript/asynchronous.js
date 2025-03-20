// JavaScript is single-threaded, meaning it executes one task at a time. But asynchronous programming allows JavaScript to handle long-running tasks (like fetching data from a server) without blocking the rest of the code.
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");

// The setTimeout function runs after 2 seconds, but JavaScript doesn’t wait—it moves to the next statement (console.log("End")).
// JavaScript is non-blocking and does not wait for setTimeout (or other async functions) to finish. Instead, it moves to the next statement and executes it immediately.
// JavaScript starts executing line by line.
// 2️⃣ console.log("Start") runs immediately.
// 3️⃣ setTimeout is encountered:

// JavaScript registers the callback function but does not wait.
// It moves to the next line immediately.
// 4️⃣ console.log("End") executes.
// 5️⃣ After 2 seconds, the event loop brings the setTimeout callback back into the main thread, and "Inside setTimeout" is printed.

// The Event Loop is responsible for handling asynchronous tasks.

// ✅ It pushes the callback function into the queue once the timer completes.
// ✅ It executes the callback only when the main thread is free.

// Imagine you’re at a restaurant:

// You order food (setTimeout starts).
// The waiter takes your order and moves on (JS moves to the next statement).
// You get your food later (callback executes).
// JavaScript behaves the same way—it takes the request, moves on, and processes it later.
