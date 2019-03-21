module.exports = function getZerosCount(number, base) {
    return findZerosOfNumberByBase(number, getPrimesWithPow(base));
}

var findZerosOfNumberByBase = function(number, primesWithPow) {
    let trailingZeros;
    for (var [prime, pow] of primesWithPow) {
        let numbersOfMultiples = 0;
        for (let numberOfMultiples = 1, i = 1; i <= number && numberOfMultiples >= 1; i++) {
            numberOfMultiples = Math.floor(number / Math.pow(prime, i));
            numbersOfMultiples += numberOfMultiples;
        }
        let sumOfNumbersOfMultiples = Math.floor(numbersOfMultiples / pow);
        trailingZeros = trailingZeros < sumOfNumbersOfMultiples ? trailingZeros : sumOfNumbersOfMultiples;
    }
    return trailingZeros;
}

var getPrimesWithPow = function(base) {
    const primesWithPow = new Map();
    for (let pow = 0, number = 2; number <= base; number++, pow = 0) {
        for (;isPrime(number) && base % number === 0; pow++, base /= number);
        primesWithPow.set(number, pow);
    }
    return primesWithPow;
}

var isPrime = function(number) {
    for(var i = 2; i < number; i++)
        if(number % i === 0) return false;
    return number > 1;
}