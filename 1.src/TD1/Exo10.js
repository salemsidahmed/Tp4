const addNumbers = (numbers) => {
    let sum = 0;
    for(number of numbers) {
        sum += number;
    }

    return sum;
};

const multiplySumByNumber = (number, sommeCb, ...args) => number * sommeCb(args);

console.log(multiplySumByNumber(4, addNumbers, 2, 3, 4, 1));