//Código para filtrar os números entre 10 e 20 ou maiores que 100 e armazenar em outro vetor
const original = [11, 7, 13, 17, 26, 101, 118, 245];
const vet = [];


for(let i of original){

    if((i > 10 && i < 20) || i > 100){
        vet.push(i);
    }

}

console.log(vet);
