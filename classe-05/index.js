//Código para armazenar os valores divisíveis por 2 e armazenar esse valor em outro vetor
const original = [1, 4, 12, 21, 53, 88, 112];
//vetor vazio para armazenar os valores encontrados durante o loop
const vet = [];
for(let i of original){

    if((i % 2) === 0){
        vet.push(i)
    } 

}
console.log(vet);
