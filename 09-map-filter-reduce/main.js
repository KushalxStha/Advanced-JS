// Array Map Method
let arr = [15, 20, 25]

let new_arr = arr.map(
  (value, index, array) => {
    console.log("Index:", index, "=", value, "(Value), Array:", array);
    return value + index + 5;       // Creates new array
  }
)
console.log("New array:", new_arr);


// Array Filter Method
let arr2 = [5, 6, 7, 15, 16, 17]

let a2 = arr2.filter(
  (a) => {
    return a > 10;
  }
)
console.log("Filtered Array:", a2);


// Array Reduce Method
let arr3 = [1, 3, 4, 8, 10, 12, 20];
let a3 = arr3.reduce(
  (x, y) => {            // Here x & y are previous & current value.
    return (x + y) / 2;
  }
)
console.log(a3)