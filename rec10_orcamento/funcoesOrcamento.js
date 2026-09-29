function calcularMaoDeObra(horas) {
    return horas * 95.00;
}


function calcularTotal(valorMateriais, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valorMateriais + maoDeObra;
}


function verificarDesconto(total) {
    if (total >= 1000.00) {
        return "DESCONTO DE 10%";
    } else {
        return "SEM DESCONTO";
    }
}


module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};
