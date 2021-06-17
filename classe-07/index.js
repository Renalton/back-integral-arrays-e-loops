//Código para localizar todos nomes que começam com a leta "A" ou "a"
const nomes = ["Ana", "Joana", "Carlos", "amanda"];
//vetor para armazenar todos os nomes localizados
const vet = [];

for(let nome of nomes){

    if(nome[0] === "A" || nome[0] === "a"){
        vet.push(nome);

    }

}
console.log(vet);

