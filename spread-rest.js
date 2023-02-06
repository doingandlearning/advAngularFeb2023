// ...  rest operator
// ... spread operator

// Rest operator
function test(operation, ...nums) {
  console.log(nums); // Array of the argumrnyd
}

test();
test("add", 1, 2, 3, 4, 5, 6, 7, 8);

// Spread operator
const restArray = ["a", "b", "c"];
console.log(...restArray); // "a", "b", "c"

const [a, b, ...others] = [1, 2, 4, 5];
const { name, location, ...other } = {
  name: "Sathiskumar",
  location: "London",
  home: "India",
};
