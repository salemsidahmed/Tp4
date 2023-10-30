const numbers = [2, 3, 16, 39, 4];

for(const index in numbers) {
    console.log(index);
    console.log(numbers[index]);
}

for(const number of numbers) {
    console.log(number);
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

for(const produit of produits) {
    console.log(produit);
    console.log(produit.nom);
}