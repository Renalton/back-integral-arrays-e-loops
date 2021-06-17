//código para imprimir todos os números múltiplos de 3
//Poderia declarar o valor direto no laço, porém, para ter um controle maior declarei o valor em uma variável
const num = 500;

for(let i = 0; i <= num; i++){
    
    if( (i % 3) === 0){
        console.log(i);
    }
}