let firstName = "Kushal";
let lastName = "Shrestha";

// document.write("Hello" + user");
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let greet = `Hello ${fullName(firstName, lastName)}.`;

document.write(greet);
console.log(greet);
