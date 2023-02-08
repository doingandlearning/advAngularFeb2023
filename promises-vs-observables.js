// Promises
// request/response

async function doSomething() {
  const variable = "Kevin";
  const response = await fetch("https://google.com"); // Pauses here
  const json = await response.json();
  console.log(json);
}

fetch("https://google.com")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Observables
// multiple-responses
//

console.log("Start");
doSomething();
console.log("end");
