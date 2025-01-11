const notaFinal = 7;
const faltas = 3;
const advertencia = 0

if (notaFinal <7 && faltas > 4) {
    console.log('Reprovado!');
} else {
    console.log('Não foi reprovado por falta!')
}

if (faltas >= 2 && !advertencia) {
    console.log('Recebeu bonus');
}  else {
    console.log('Não recebeu bonus');
}


