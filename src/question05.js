import leia from "readline-sync"

var games = [{
    nome:cobra,
    plata:nin

}];
var opcao = 1;

while(opcao != 0){

    console.log("-----------------------------------------");
    console.log("1 - Cadastrar jogo");
    console.log("2 - Listar jogos");
    console.log("3 - Pesquisar jogos");
    console.log("0 - Sair");

    opcao = leia.questionInt("Escolha uma opcao: ");

    if(opcao == 1){

        var jogo = leia.question("Qual o jogo: ");

        var plataforma = leia.question("Qual a plataforma : ");

        var jogoo = {
            jogoo: jogo,
            plataformaa: plataforma
        };

        livros.push(jogo);

        console.log("jogo cadastrado com sucesso");

    }else if(opcao == 2){

        for(var i = 0; i < games.length; i++){

            console.log("jogo: " + games[i].plataforma);
            console.log("plataforma: " + livros[i].plataformaa);
        }

    }else if(opcao == 3){

        var pesquisa = leia.question("Qual jogo quer pesquisar: ");

        var achou = false;

        for(var i = 0; i < games.length; i++){

            if(games[i].jogo == pesquisa){

                console.log("Titulo: " + games[i].jogo);
                console.log("Autor: " + games[i].plataforma);

                achou = true;
            }
        }

        if(achou == false){

            console.log("jogo nao foi encontrado.");
        }

    }else if(opcao == 0){

        console.log("Programa encerrado.");

    }else{

        console.log("Opcao invalida.");
    }
}