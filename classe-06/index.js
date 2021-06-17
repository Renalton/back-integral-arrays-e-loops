//Código para somar todos os números pares de um vetor
const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
//variável para somar os numeros pares do vetor
let somapar = 0;

for(let i = 0; i < numeros.length; i++){
    if((numeros[i] % 2) == 0){
        somapar += numeros[i];
    }
}

console.log(somapar);