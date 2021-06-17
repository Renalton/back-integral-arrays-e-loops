//código para imprimir o indice do vetor com base nos valores booleanos utilizando o conceito de truthiness
const disjuntores = [false, false, true, false, false, true, false, false];

for(let i = 0; i < disjuntores.length; i++){
    
    if(disjuntores[i]){
        console.log(i);
    }
}