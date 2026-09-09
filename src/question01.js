import leia from "readline-sync"

var vendas = [];
var soma = 0;
var menorVenda= 0;

for(var i = 0; i < 5; i++){
    var nota= leia.questionFloat("Qual o valor da venda : ")
    menorVenda = nota 
    if(nota <= menorVenda){
        menorVenda = nota;
    }
    
    soma += nota
    vendas.push(nota)

}

var media = soma / 5

console.log("vendas: " + vendas)
console.log("Soma das vendas: " + soma)
console.log("Media das vendas: " + media)
console.log("menor valor " + menorVenda)

