function prom(complete) {
  return new Promise(function(resolve, reject) {
    console.log("Fetching Data... Please wait.")
    setTimeout(()=>{
      if (complete) {
        resolve("It is successfull.");
      } 
      else {
        reject("It failed.");
      }
    },1500)
  })
}

let a=function onCheck(output){
  console.log(output);
}

prom(true).then(a).catch(a);
// Method Chaining

setTimeout(()=>{
  prom(false).then(a).catch(a);
},2500)
