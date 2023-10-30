const pays = "Palestine";
const population = 10000000;
// whith back tick
const message = ` La ${pays} est un pays 
                    arabe dont le nombre 
                    de la population 
                    est de ${population} `;
// whithout back tick
const message2 = " La "+ pays + " est un pays " + 
"arabe dont le nombre " +
"de la population" +
"est de " + population;

console.log(message);
