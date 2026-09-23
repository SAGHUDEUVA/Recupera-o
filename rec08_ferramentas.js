const readline = require('readline-sync');


const ferramentas = [];

console.log("=== CADASTRO DE FERRAMENTAS ===");

for (let i = 1; i <= 4; i++) {
    console.log(`\nFerramenta ${i}:`);
    
    const nome = readline.question("Nome: ");
    const quantidade = parseInt(readline.question("Quantidade disponivel: "), 10);
    const minimo = parseInt(readline.question("Quantidade minima: "), 10);

    
    const novaFerramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    
    ferramentas.push(novaFerramenta);
}

console.log("\n========================================");
console.log("=== RELATÓRIO FINAL DE STOCK ===");
console.log("========================================");


ferramentas.forEach(ferramenta => {
    
    let situacao = "";
    if (ferramenta.quantidade < ferramenta.minimo) {
        situacao = "REPOR";
    } else {
        situacao = "ESTOQUE SUFICIENTE";
    }

    
    console.log(`Nome: ${ferramenta.nome}`);
    console.log(`Quantidade: ${ferramenta.quantidade}`);
    console.log(`Mínimo: ${ferramenta.minimo}`);
    console.log(`Situação: ${situacao}`);
    console.log("----------------------------------------");
});
