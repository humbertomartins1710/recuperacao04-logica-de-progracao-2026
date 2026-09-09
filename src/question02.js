import leia from 'readline-sync'

var objeto = [{
    aluno:null,
    ponto:0,
},
{
    aluno:null,
    poto:0,
},
{
    aluno:null,
    ponto:0,
}]
var sesentaMais = 0;
var sesentaMenos = 0;
for (var i = 1 ; i <= 3 ;){
    i++
    var nome = leia.question("Digite seu nome : ")
    var pontos = leia.questionInt("digite a quantidade de pontos ")
    
objeto[i].aluno = nome;
objeto[i].ponto = pontos;

if(objeto.at.ponto[i] >= 60){
    sesentaMais++
}else if (objeto.at.ponto[i] < 60){
    sesentaMenos++
}
}



console.log(objeto)