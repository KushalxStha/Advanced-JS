// let arr1 = [10, 20, 30];
// let arr2 = [40, 50];
// console.log([5, ...arr1, ...arr2]);

let obj1 = {
  name: "Kushal",
  course: "BIT"
};

let obj2 = {
  age: 21
};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// Spread Operator is used while calling function.
// It does cloning.
