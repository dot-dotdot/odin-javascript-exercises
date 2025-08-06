const fibonacci = function(fibNumberIndex) {
    if (fibNumberIndex >= 0) {
        let i = 1;
        let fib1 = 0;
        let fib2 = 1;

        while (i <= fibNumberIndex) {
            let nextFibNumber = fib2 + fib1;
            fib1 = fib2;
            fib2 = nextFibNumber;

            i++;
        }

        return fib1;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
