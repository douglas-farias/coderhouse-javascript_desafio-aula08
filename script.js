var valorInicial = parseFloat(prompt("Qual o valor do empréstimo desejado?"));
while (isNaN(valorInicial) || valorInicial <= 0) {
    valorInicial = parseFloat(prompt("Por favor, digite um valor válido para o empréstimo:"))
}

var quantidadeParcelas = parseInt(prompt("Em quantas parcelas deseja pagar essa dívida?"));
while (isNaN(quantidadeParcelas) || quantidadeParcelas <= 0) {
    quantidadeParcelas = parseFloat(prompt("Por favor, digite um número de parcela válido:"))
}

const taxaJuros = 0.0749;
const valorAmortizacao = valorInicial / quantidadeParcelas;

var saldoDevedor = valorInicial;

var valorTotal = valorAmortizacao * quantidadeParcelas + valorInicial * taxaJuros * ((quantidadeParcelas + 1) / 2)

alert(`Dados do empréstimo:\nValor empréstimo: R$${valorInicial.toFixed(2)}\nNúmero de parcelas: ${quantidadeParcelas}\nTaxa de juros: ${(taxaJuros*100).toFixed(2)}%\n O valor total a ser pago será de R$${valorTotal.toFixed(2)}\n\nConfira o valor de cada parcela no Console.`)

function calculoParcela() {
    let valorParcela;
    for (let i = 1; i <= quantidadeParcelas; i++) {
        if (i === 1) {
            valorParcela = valorAmortizacao + (saldoDevedor * taxaJuros);
            console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
        } else {
            saldoDevedor -= valorAmortizacao;
            valorParcela = valorAmortizacao + (saldoDevedor * taxaJuros);
            console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
        }
    }
}

calculoParcela();
