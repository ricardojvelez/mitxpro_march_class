//Example 1 of a callback function
function callbackFunction() {
  console.log("Hello from the callback function!");
}

function greet(name, fn) {
  console.log(`Hello, ${name}!`);
  fn();
}

greet("Rick Sanchez", callbackFunction);

// Example 2 of a callback function with setTimeout
function fetchRugbyPlayerData(callback) {
  setTimeout(() => {
    const playerData = {
      name: "Jonny Wilkinson",
      position: "Fly-half",
      team: "England",
    };
    callback(playerData);
  }, 5000);
}

// Usage of the fetchRugbyPlayerData function with a callback
fetchRugbyPlayerData((playerData) => {
  console.log("Rugby player data received:", playerData);
});

// Example 3 of a callback function simulating asynchronous code

function fetchData(callback) {
  setTimeout(function () {
    const data = "Async data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing:", data);
}

console.log("Start of script");
fetchData(processData);
console.log("End of script");
