const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Quantos produtos são produzidos por ciclo? ', (resposta) => {
    const produtosPorCiclo = parseInt(resposta);

    
    if ((produtosPorCiclo) || produtosPorCiclo <= 0) {
        console.log('Por favor, insira um número válido maior que zero.');
        rl.close();
        return;
    }

    let producaoAcumulada = 0;

    console.log('\n--- Projeção de Produção por Ciclo ---');

    
    for (let ciclo = 1; ciclo <= 12; ciclo++) {
        
        producaoAcumulada += produtosPorCiclo;

        
        console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
    }

    rl.close();
});
