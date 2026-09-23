const readline = require('readline-sync');


const nomePeca = readline.question('Introduza o nome da peca: ');


const quantidade = parseInt(readline.question('Introduza a quantidade comprada: '), 10);


const precoUnitario = parseFloat(readline.question('Introduza o preco unitario (R\$): '));


const valorTotal = quantidade * precoUnitario;


console.log('\n=== RESUMO DA COMPRA ===');
console.log(`Peça: ${nomePeca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
