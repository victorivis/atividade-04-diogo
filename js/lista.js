function receberListaLoja(){
    if(localStorage.listaLoja){
        console.log("Existe listaLoja");
        return JSON.parse(localStorage.listaLoja);
    }
    else{
        console.log("Não existe listaLoja");
        return null;
    }
}

function preencherListaLoja(listaLoja){
    localStorage.listaLoja = JSON.stringify(listaLoja);
}

function adicionarItem(item){
    if(receberListaLoja() != null){
        let listaLoja = receberListaLoja();
        listaLoja.push(item);
        preencherListaLoja(listaLoja);
    }
    else{
        preencherListaLoja([item]);
    }
}

let arroz = {nome: "arroz (1kg)", preco: 10.2, comprado: false};
let feijao = {nome: "feijão (1kg)", preco: 12.5, comprado: false};

function removerItem(posicao){
    let listaLoja = receberListaLoja();
    if(posicao!=-1 && posicao < listaLoja.length){
        listaLoja.splice(posicao, 1);
        preencherListaLoja(listaLoja);
    }
    console.log("Algo errado em removerItem");
}

function marcarItem(posicao){
    let listaLoja = receberListaLoja();
    if(posicao!=-1 && posicao < listaLoja.length){
        listaLoja[posicao].comprado = !listaLoja[posicao].comprado;
        preencherListaLoja(listaLoja);
    }
    else{
        console.log("Algo errado em marcarItem");
    }
}

export{receberListaLoja, preencherListaLoja, adicionarItem, removerItem, marcarItem};