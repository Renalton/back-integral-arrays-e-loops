//Código para informar a maior diferença entre dois números do vetor
const numeros = [8, 11, 4, 1];
//A variável menorN vai receber o número contigo no indice zero do vetor
let menorN = numeros[0], maiorN = 0;

for(let numero of numeros){

    //Condicional para achar o menor valor contido no vetor
    if(numero <= menorN ){
        menorN = numero

    }
    //Condicional para achar o maior valor contido no vetor
    if(numero > maiorN){
        maiorN = numero;
    }

}
console.log(maiorN - menorN);