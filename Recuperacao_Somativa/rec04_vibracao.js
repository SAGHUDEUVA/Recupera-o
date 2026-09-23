const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Introduza o valor da vibração do equipamento (em mm/s): ', (resposta) => {
    
    
    const vibracao = parseFloat(resposta.replace(',', '.'));

    
    if ((vibracao) || vibracao < 0) {
        console.log('\nErro: Por favor, introduza um valor numérico válido e maior ou igual a zero.');
    } else {
        let classificacao = '';

        
        if (vibracao <= 3) {
            classificacao = 'ESTÁVEL';
        } else if (vibracao <= 6) {
            classificacao = 'ATENÇÃO';
        } else {
            classificacao = 'CRÍTICA';
        }

        
        console.log('\n========================================');
        console.log(`Valor de vibração informado: ${vibracao.toFixed(1)} mm/s`);
        console.log(`Classificação: [${classificacao}]`);
        console.log('========================================');
    }

    
    rl.close();
});