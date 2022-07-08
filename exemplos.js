// var nome = "Victor"
// var nomeCompleto = "Victor Vieira" // CamelCase

// //Todo software possui entrada, processamento e saída.

// console.log(nomeCompleto)

// Criar um programa que receba 3 notas de um aluno, calcule sua média e mostre
// aprovado se caso a média for maior ou igual a  7, caso contrário o aluno será reprovado.

//Entrada de dados
var nota1 = 5
var nota2 = 7
var nota3 = 6
//Processamento
// > Maior
// < Menor
// >= Maior igual
// <= Menor igual
// != Diferente
// == Igual
var media = (nota1 + nota2 + nota3) / 3
const data = new Date();
//Saída
if(media >= 7){
    console.log("------------------------------")
    console.log(data.toLocaleDateString())
    console.log("Aluno Aprovado com média de = "+media)
    console.log("------------------------------")
}else{
    console.log("------------------------------")
    console.log(data.toLocaleDateString());
    console.log("Aluno Reprovado com média de = "+media)
    console.log("------------------------------")
}
