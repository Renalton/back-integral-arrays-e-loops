//Código para controlar a entrada e saida de dados nos vetores sem exceder o limite informado que nesse caso é 5
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while(filaDeDentro.length < 5 || filaDeFora > 0){

    filaDeDentro.push(filaDeFora.shift());

}
console.log(filaDeDentro);
console.log(filaDeFora);