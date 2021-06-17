//Código para localizar e imprimir o maior valor contido no vetor
const numeros = [3, 24, 1, 8, 11, 7, 5];
//Variável para armazenar o maior valor do vetor 
let eMaior = 0;

for(let numero of numeros){

    if(numero > eMaior){
        eMaior = numero;
    }
}
console.log(eMaior);