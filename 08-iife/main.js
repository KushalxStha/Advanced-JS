// Immediately Invoked Function Expressions
// Syntax:  (function)();

//  Named IIFE
(function name(){
    console.log("Kushal")
})();

// IIFE
(()=>{
    console.log("Shrestha")
})();

// Passing an arguments
((a,b)=>{
    console.log(a+b)
})(5,6);
