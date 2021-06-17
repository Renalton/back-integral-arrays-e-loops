const numeros = [54, 22, 14, 87, 1, 284];
//variável para armazenar o indice do vetor
let index = -1;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === 10){
        index = i;
        break;
    }
}
console.log((index === -1? -1: index));