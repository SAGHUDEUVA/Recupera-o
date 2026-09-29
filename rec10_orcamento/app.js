const readline = require('readline-sync');
const orcamento = require('./funcoesOrcamento');

console.log("=== SISTEMA DE ORÇAMENTO TÉCNICO ===");

o
const cliente = readline.question("Digite o nome do cliente: ");
const valorMateriais = readline.questionFloat("Digite o valor dos materiais (R\$): ");
const horasServico = readline.questionFloat("Digite a quantidade de horas de servico: ");


const maoDeObra = orcamento.calcularMaoDeObra(horasServico);
const total = orcamento.calcularTotal(valorMateriais, horasServico);
const situacaoDesconto = orcamento.verificarDesconto(total);


console.log("\n=================================");
console.log("       RELATÓRIO TÉCNICO         ");
console.log("=================================");
console.log(`Cliente: ${cliente}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mão de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total Geral: R$ ${total.toFixed(2)}`);
console.log(`Situação: ${situacaoDesconto}`);
console.log("=================================");
