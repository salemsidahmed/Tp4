const { log } = require("console");
// Les 2 méthodes sont

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,eyeColor:"blue"
};

console.log(person.firstName);
console.log(person["firstName"]);

// dans certains contexts on ne peut pas utiliser le .
const getSumArrByKey = (arr, key) => {
    let sum = 0;
    for (const elm of arr) {
        sum += elm[key];
    }

    return sum;
}

const produits = [
    {
        nom : "Eau minérale",
        prix: 100
    },
    {
        nom : "Lait",
        prix: 300
    },
    {
        nom : "Tirma",
        prix: 100
    }
];

console.log(getSumArrByKey(produits, "prix"));