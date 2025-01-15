const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(10,2));

//Não possui hosting, a expressão precisa ser declarada antes de ser chamada. 