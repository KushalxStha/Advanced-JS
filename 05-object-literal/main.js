let name = "Kushal";
let uni = "university";
let course = "BIT";

// Eg 1
let obj = {
  name,
  course,
  [uni]: "TU",
  // detail: function () {
  //   return `${this.name} is student of ${this.course}.`;
  // }
  "more detail"() {
    return `${this.name} is student of ${this[uni]}.`;
  }
};

console.log(obj);
// console.log(obj.detail());
console.log(obj["more detail"]());

// Eg 2: Returning Value as an Object.
let fname = "Kushal";
let lname = "Shrestha";
function student(fname, lname, course) {
  let fullname = fname + " " + lname;
  return { fullname, course };
}

let s = student(fname, lname, course);
console.log(student(fname, lname, course));
console.log(s.fullname);
