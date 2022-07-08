// ok -- Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10
// imprima uma mensagem informando não ter capacidade suficiente.
// ok -- Se a peça possuir um peso superior ou igual a 100 gramas, pode cadastrar
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

// posições =           0            1             2                3        4       5        6
var listaDePecas = ["Amortecedor","Motor","Correia dentada","Filtro de Ar","Pneu","Farol","Volante"]; //Array

if(listaDePecas.length > 10){
    console.log("Não é possível cadastrar, devido excesso de peças");
}else{
    console.log("Limite permitido")
}

let peso = 100;

if(peso >= 100){
    console.log("Peso Permitido");
}else{
    console.log("O peso está abaixo do normal")
}


let peca = "Farol";
if(peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é válido")
}
