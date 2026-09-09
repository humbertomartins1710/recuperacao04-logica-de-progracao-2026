import leia from 'readline-sync'

var objeto = [{
    nomee : null,
    anos : 0,
}]

var menos = 0;
var mais = 0;

var prof = leia.questionInt("quantos professores : ")

while(prof != 0 ){
    prof--
    var nome = leia.question("nome do professor")
    var anos = leia.questionInt("quantos anos de trabalho")

if(anos >= 5){
    mais++
}else {
    menos++
}

}
console.log("professores com 5 ou mais anos na escola: " + mais)
console.log("professores com menos de 5 anos na escola: " + menos)