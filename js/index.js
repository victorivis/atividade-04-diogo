import{preencherListaLoja, receberListaLoja, adicionarItem, removerItem, removerItemPorPosicao, marcarItem} from "./lista.js";

let arroz = {nome: "arroz (1kg)", preco: 10.2, comprado: false};
let feijao = {nome: "feijão (1kg)", preco: 12.5, comprado: false};

//recebe os dados do html e armazena no localStorage
function receberInput(){
    let inputNome = document.getElementById("nome");
    let inputPreco = document.getElementById("preco");
    if(nome.value && preco.value){
        let novoItem = {nome: inputNome.value, preco: inputPreco.value, comprado: false};
        preencherListaLoja(novoItem);
        inputNome.value = "";
        inputPreco.value = "";
        return novoItem;
    }
    else{
        alert("Preencha todos os campos");
        return null;
    }
}

//Faz o que está armazenado no localStorage ser visível no html
function criarTabelas(item){
    let tabelasHTML = document.getElementById("tabelaItens");
    if(tabelasHTML){
        let novaLinha = document.createElement("tr");
        let coluna1 = document.createElement("td");
        coluna1.textContent = item.nome;

        let coluna2 = document.createElement("td");
        coluna2.textContent = item.preco;

        let coluna3 = document.createElement("td");
        coluna3.textContent = "Checkbox";

        let coluna4 = document.createElement("td");
        coluna4.textContent = "Botão";
        for(let i=1; i<=4; i++){
            novaLinha.appendChild(eval(`coluna${i}`));
        }

        tabelasHTML.appendChild(novaLinha);
    }
    else{
        let tabelasHTML = document.createElement("table");
        tabelasHTML.id = "tabelaItens"

        let linhaCabecalho = document.createElement("tr");
        let colunaCabecalho1 = document.createElement("th");
        colunaCabecalho1.textContent = "Nome";

        let colunaCabecalho2 = document.createElement("th");
        colunaCabecalho2.textContent = "Preco";

        let colunaCabecalho3 = document.createElement("th");
        colunaCabecalho3.textContent = "Comprado";

        let colunaCabecalho4 = document.createElement("th");
        colunaCabecalho4.textContent = "Ações";
        for(let i=1; i<=4; i++){
            linhaCabecalho.appendChild(eval(`colunaCabecalho${i}`));
        }

        let novaLinha = document.createElement("tr");
        let coluna1 = document.createElement("td");
        coluna1.textContent = item.nome;

        let coluna2 = document.createElement("td");
        coluna2.textContent = item.preco;

        let coluna3 = document.createElement("td");
        coluna3.textContent = "Checkbox";

        let coluna4 = document.createElement("td");
        coluna4.textContent = "Botão";
        for(let i=1; i<=4; i++){
            novaLinha.appendChild(eval(`coluna${i}`));
        }

        tabelasHTML.appendChild(linhaCabecalho);
        tabelasHTML.appendChild(novaLinha);


        let divSaida = document.getElementById("saida");
        divSaida.appendChild(tabelasHTML);
    }
}

//criarTabelas(arroz);
//criarTabelas(feijao);

function funcoesCompiladas(){
    let novoObjeto = receberInput();
    if(novoObjeto){
        criarTabelas(novoObjeto);
    }
}

function mostrarOnLoad(){
    console.log("On load!");
    let listaLoja = receberListaLoja();
    if(listaLoja){
        for(let i=0; i<listaLoja.length; i++){
            criarTabelas(listaLoja[i]);
        }
    }
}

document.getElementById("botaoAdicionar").addEventListener("click", funcoesCompiladas);
document.addEventListener("load", mostrarOnLoad);