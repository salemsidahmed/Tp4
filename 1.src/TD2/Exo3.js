const getSumArrByKey = (array, key) => array.reduce((cnt, curVal) => cnt + curVal[key], 0);

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

console.log(getSumArrByKey(produits, 'prix'));
