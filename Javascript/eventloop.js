// What Exactly is the Event Loop?
// The Event Loop is a looping process that:

// Looks at the Call Stack (where synchronous code runs).
// Looks at the Task Queue/Microtask Queue (where async tasks like setTimeout, Promises, and I/O operations wait).
// Moves tasks from the queue to the Call Stack when the stack is empty.
// ✅ This ensures JavaScript runs efficiently without blocking execution.

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

Promise.resolve("Inside Promise").then(console.log);

console.log("End");

// 🔹 How the Event Loop Works (Step-by-Step)
// 1️⃣ Call Stack (Synchronous Code Executes Here)
// JavaScript has a Call Stack, where it runs synchronous (normal) code first.
// Functions are pushed onto the stack and popped off when completed.
// 2️⃣ Web APIs (Async Tasks Go Here)
// When functions like setTimeout, fetch, or DOM events are called, JavaScript does not execute them immediately.
// Instead, it sends them to the Web API environment (handled by the browser or Node.js).
// 3️⃣ Task Queue & Microtask Queue (Async Code Waits)
// Once an async operation completes (like a timer or API response), the callback function moves into a queue.
// Two main queues:
// ✅ Microtask Queue → Handles Promises, queueMicrotask() (Executes before other tasks).
// ✅ Task Queue (Callback Queue) → Handles setTimeout, setInterval, I/O tasks.
// 4️⃣ Event Loop (The Manager)
// The Event Loop keeps running in the background, checking:
// Is the Call Stack empty?
// Are there tasks waiting in the queue?
// If yes, move them to the Call Stack for execution.
