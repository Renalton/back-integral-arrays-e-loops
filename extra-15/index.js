//Código para separar os números pares e impares do vetor e atribuir em outro vetor conforme sua categoria
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for(let i of original){

    if((i % 2) === 0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}
console.log(pares);
console.log(impares);