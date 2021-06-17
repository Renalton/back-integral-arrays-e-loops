const letras = ["A", "a", "B", "C", "E", "e"];
//variável para contar o número de letras localizadas no vetor
let aux = 0;

for(let letra of letras){

    if(letra === "E" || letra ==="e"){
        aux++;
    }
}

console.log((aux > 0? `Foram encontradas ${aux} letras "E" ou "e"`: `Nenhuma letra "E" ou "e" foi encontrada.`));