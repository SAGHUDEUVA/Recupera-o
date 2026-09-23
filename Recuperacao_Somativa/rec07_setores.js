const readline = require('readline-sync');


const setores = [];

console.log("--- CADASTRO DE SETORES DA FÁBRICA ---");


for (let i = 0; i < 6; i++) {
    let nomeSetor = readline.question(`Introduza o nome do setor ${i + 1}: `);
    
    
    setores.push(nomeSetor);
}

console.log("\n--- LISTAGEM DOS SETORES ---");


for (let i = 0; i < setores.length; i++) {
    
    console.log(`${i + 1} - ${setores[i]}`);
}