const fibonacci = function(n) {
    let prev = 1;
    let fib = 1;
    n = parseInt(n);
    if(n < 0)
        return "OOPS";
    if(n === 0)
        return 0;
    if(n === 1 || n === 2)
        return 1;

    for(let i = 2; i < n; i++){
        let tmp = fib; 
        fib += prev;
        prev = tmp;
    }
    return fib;
};

console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
