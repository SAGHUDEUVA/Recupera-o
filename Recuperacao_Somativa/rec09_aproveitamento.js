const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularAproveitamento(util, total) {
    if (total === 0) return 0; // Evita divisão por zero
    return (util / total) * 100;
}


function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}


rl.question('Digite a quantidade TOTAL de matéria-prima: ', (respostaTotal) => {
    rl.question('Digite a quantidade ÚTIL de matéria-prima: ', (respostaUtil) => {
        
        const total = parseFloat(respostaTotal);
        const util = parseFloat(respostaUtil);

        
        const percentual = calcularAproveitamento(util, total);
        const classificacao = classificarAproveitamento(percentual);

        
        console.log('\n--- RELATÓRIO DE APROVEITAMENTO ---');
        console.log(`Quantidade Total: ${total.toFixed(2)}`);
        console.log(`Quantidade Útil:  ${util.toFixed(2)}`);
        console.log(`Percentual:       ${percentual.toFixed(2)}%`);
        console.log(`Classificação:    ${classificacao}`);
        console.log('-----------------------------------\n');

        rl.close();
    });
});
