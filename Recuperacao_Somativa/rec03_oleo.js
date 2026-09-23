const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite o nível de óleo em porcentagem: ', (input) => {
    
    const nivelOleo = parseFloat(input);

    console.log(`\nValor informado: ${nivelOleo}%`);

    
    if (nivelOleo >= 40 && nivelOleo <= 80) {
        
        console.log("NÍVEL NORMAL");
    } else {
        
        console.log("INSPEÇÃO NECESSÁRIA");
    }

    rl.close();
});
