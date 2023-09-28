function prom(a, b) {
  return new Promise(function(resolve, reject) {

    console.log("Fetching Data... Please wait.")

    setTimeout(() => {
      $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
        resolve(data);
      }).fail(() => {
        reject("Failed to load JSON.")
      })
    }, 2000)
  })
}

let a = function onCheck(output) {
  console.log(output);
}

prom().then(a).catch(a);
