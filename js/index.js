import{preencherListaLoja, receberListaLoja, adicionarItem, removerItem, marcarItem} from "./lista.js";

//recebe os dados do html e armazena no localStorage
function receberInput(){
    let inputNome = document.getElementById("nome");
    let inputPreco = document.getElementById("preco");
    if(nome.value && preco.value){
        let novoItem = {nome: inputNome.value, preco: inputPreco.value, comprado: false};
        adicionarItem(novoItem);
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
        coluna3.className = "alinhar";
        let checkbox = document.createElement("input");
        checkbox.addEventListener("click", botaoMarcarComprado);
        checkbox.type = "checkbox";
        if(item.comprado==true){
            checkbox.checked = true;
        }
        checkbox.className = "marcar";
        coluna3.appendChild(checkbox);

        let coluna4 = document.createElement("td");
        let botao = document.createElement("button");
        botao.addEventListener("click", botaoRemover);
        botao.textContent = "Remover";
        botao.className = "remover";
        coluna4.appendChild(botao);

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
        coluna3.className = "alinhar";
        let checkbox = document.createElement("input");
        checkbox.addEventListener("click", botaoMarcarComprado);
        checkbox.type = "checkbox";
        if(item.comprado==true){
            checkbox.checked = true;
        }
        checkbox.className = "marcar";
        coluna3.appendChild(checkbox);

        let coluna4 = document.createElement("td");
        let botao = document.createElement("button");
        botao.addEventListener("click", botaoRemover);
        botao.textContent = "Remover";
        botao.className = "remover";
        coluna4.appendChild(botao);

        for(let i=1; i<=4; i++){
            novaLinha.appendChild(eval(`coluna${i}`));
        }

        tabelasHTML.appendChild(linhaCabecalho);
        tabelasHTML.appendChild(novaLinha);


        let divSaida = document.getElementById("saida");
        divSaida.appendChild(tabelasHTML);
    }
}

//Essa função é bem engraçada
function botaoRemover(event){
    let alvo = event.target.parentNode.parentNode;
    var pai = alvo.parentNode;
    var nodosFilhos = pai.children; //Lista de nodos irmãos + o alvo

    //Usa o método indexOf para descobrir a posição do botão que foi clicado
    let posicao = Array.prototype.indexOf.call(nodosFilhos, alvo);

    //removendo do HTML
    alvo.remove();
    
    //removendo do localStorage
    removerItem(posicao-1);
}

function botaoMarcarComprado(event){
    let alvo = event.target.parentNode.parentNode;
    var pai = alvo.parentNode;
    var nodosFilhos = pai.children; //Lista de nodos irmãos + o alvo

    //Usa o método indexOf para descobrir a posição do botão que foi clicado
    let posicao = Array.prototype.indexOf.call(nodosFilhos, alvo);
    
    //Marcar no localStorage
    marcarItem(posicao-1);
}

//Para rodar quando clica em adicionar
function funcoesCompiladas(){
    let novoObjeto = receberInput();
    if(novoObjeto){
        criarTabelas(novoObjeto);
    }
}

//Para rodar quando a página carrega
function mostrarOnLoad(){
    console.log("On load!");
    let listaLoja = receberListaLoja();
    console.log(listaLoja);
    if(listaLoja){
        for(let i=0; i<listaLoja.length; i++){
            criarTabelas(listaLoja[i]);
        }
    }
}

document.getElementById("botaoAdicionar").addEventListener("click", funcoesCompiladas);
window.addEventListener("load", mostrarOnLoad);