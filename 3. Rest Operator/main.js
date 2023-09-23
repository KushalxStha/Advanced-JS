// ...arg -> this is Rest Operator. (always at last)
// It is used while declaring function.
function sum(name, course, ...args) {
    console.log(arguments);

    document.write(`Hello ${name} of ${course}! <br>`);

    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }

    document.write(sum);
}
sum("Kushal", "BIT", 20, 30, 40);
// sum(78, 89);
