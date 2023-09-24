let complete = true;

let prom = new Promise(function (resolve, reject) {
  if (complete) {
    resolve("It is successfull.");
  } else {
    reject("It failed.");
  }
});

console.log(prom);
