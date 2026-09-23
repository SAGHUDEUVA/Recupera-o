const readline = require('readline-sync'); 

let somaTempos = 0; 
const totalAtendimentos = 6; 

console.log(`--- Registro de ${totalAtendimentos} Atendimentos Técnicos ---`); 

for (let i = 1; i <= totalAtendimentos; i++) { 
    
    let tempo = readline.questionFloat(`Digite o tempo do atendimento ${i} (em minutos): `); 
    somaTempos += tempo; 
} 

let mediaTempos = somaTempos / totalAtendimentos; 

console.log("\n--- Resultado Final ---"); 
console.log(`Soma total dos tempos: ${somaTempos} minutos`); 
console.log(`Media dos tempos: ${mediaTempos.toFixed(1)} minutos`);
