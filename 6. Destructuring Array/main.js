let user = ["Luffy", 19, "Goa, East Blue", ["male", "1.5 Billion Berry"]];
// let [name, age, address = "unknown", [gender, bounty]] = user;

let [name, ...args] = user;
// Using Rest Operator

console.log(name);
// console.log(age);
// console.log(address);
// console.log(gender);
// console.log(bounty);
console.log(args);

// Using inside function
function charDetail([char, role, position]) {
  console.log(char);
  console.log(role);
  console.log(position);
}
charDetail(["Zoro", "Swordsmen", "Vice captain"]);

// another eg:
function character() {
  return ["Sanji", "Cook"];
}
let [char2, job] = character();
console.log(char2, job);
