var boasVindas = alert("Bem vindo ao Hortifruti Virtual")
var carrinho = []

function produtos(nome, precoUnitario, unidade) {
    this.nome = nome;
    this.precoUnitario = precoUnitario;
    this.unidade = unidade;
}

const fruta1 = new produtos("Banana", 6.00, "dúzia");
const fruta2 = new produtos("Laranja", 4.00, "kg");
const verdura1 = new produtos("Alface", 4.99, "maço");
const legume1 = new produtos("Cenoura", 1.50, "unidade")

function escolhaQuantidade(produto, menuAnterior) {
    let quantidadeEscolhida = parseFloat(prompt(`Quantos(as) ${produto.unidade}s de ${produto.nome} deseja?`))
    
    let totalParcial = quantidadeEscolhida * produto.precoUnitario
    let valorFormatado = parseFloat(totalParcial.toFixed(2))

    alert(`${quantidadeEscolhida} ${produto.unidade}s de ${produto.nome}\nTotal parcial: R$${valorFormatado}`)
    carrinho.push({produto: produto.nome, quantidade: quantidadeEscolhida, valor: valorFormatado})

    if (menuAnterior === "frutas") {
        menuFrutas()
    } else if (menuAnterior === "verdurasLegumes") {
        menuVerdurasLegumes()
    } else {menuInicial()}
}

function menuInicial() {
    let secaoInicial = parseInt(prompt("Qual seção deseja visitar?\n1. Frutas\n2. Verduras e Legumes\n3. Finalizar compras"))
    
    switch (secaoInicial) {
        case 1:
            menuFrutas();
            break;
        case 2:
            menuVerdurasLegumes();
            break;
        case 3:
            finalizarCompras();
            break;
        default:
            alert("Opção Inválida.")
            secaoInicial = parseInt(prompt("Qual seção deseja visitar?\n1. Frutas\n2. Verduras e Legumes\n3. Finalizar compras"))
    }
}

function menuFrutas() {
    let escolhaFrutas;
    
    do {
        escolhaFrutas = parseInt(prompt(`Qual fruta deseja comprar?\n1.${fruta1.nome} - R$${fruta1.precoUnitario.toFixed(2)}/${fruta1.unidade}\n2.${fruta2.nome} - R$${fruta2.precoUnitario.toFixed(2)}/${fruta2.unidade}\n3. Menu anterior`))
        
        switch (escolhaFrutas) {
            case 1:
                escolhaQuantidade(fruta1, "frutas");
                break;
            case 2:
                escolhaQuantidade(fruta2, "frutas");
                break;
            case 3:
                menuInicial();
                break;
            default:
                alert("Opção inválida.")
        }
    } while (escolhaFrutas !== 1 && escolhaFrutas !== 2 && escolhaFrutas !== 3);

}

function menuVerdurasLegumes() {
    let escolhaVerdurasLegumes;

    do {
        escolhaVerdurasLegumes = parseInt(prompt(`Qual verdura ou legume deseja comprar?\n1.${verdura1.nome} - R$${verdura1.precoUnitario.toFixed(2)}/${verdura1.unidade}\n2.${legume1.nome} - R$${legume1.precoUnitario.toFixed(2)}/${legume1.unidade}\n3. Menu anterior`))
    
        switch(escolhaVerdurasLegumes) {
            case 1:
                escolhaQuantidade(verdura1, "verdurasLegumes");
                break;
            case 2:
                escolhaQuantidade(legume1, "verdurasLegumes");
                break;
            case 3:
                menuInicial();
                break;
            default:
                alert("Opção inválida.");
        }
    } while (escolhaVerdurasLegumes !== 1 && escolhaVerdurasLegumes !== 2 && escolhaVerdurasLegumes !== 3);
}

function finalizarCompras() {
    const valorTotal = carrinho.reduce((soma, o) => soma + o.valor, 0);

    console.log(`Total de itens: ${carrinho.length}`)
    for (const item of carrinho) {
        console.log(`- ${item.quantidade} x ${item.produto} - R$${item.valor.toFixed(2)} `)
    }
    console.log(`Valor total: R$${valorTotal}`)

    alert(`Compra finalizada.\nValor total: R$${valorTotal}.\nConfira a nota fiscal no Console`);
}

menuInicial()
