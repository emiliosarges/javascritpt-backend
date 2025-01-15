const readline = require("readline");

let saldo = 100;
let deposito = 0;
let saque = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Digite a operação que deseja fazer:");
console.log("1 - Verificar saldo");
console.log("2 - Efetuar um depósito");
console.log("3 - Efetuar um saque");

rl.question("Escolha uma opção: ", (operacao) => {
  switch (parseInt(operacao)) {
    case 1:
      console.log(`Seu saldo atual é: R$ ${saldo}`);
      break;

    case 2:
      rl.question("Digite o valor a ser depositado: ", (valor) => {
        deposito = parseFloat(valor);
        saldo += deposito;
        console.log(`Depósito efetuado! Seu saldo agora é: R$ ${saldo}`);
        rl.close();
      });
      return;

    case 3:
      rl.question("Digite o valor a ser sacado: ", (valor) => {
        saque = parseFloat(valor);
        if (saque > saldo) {
          console.log("Saldo insuficiente para realizar o saque.");
        } else {
          saldo -= saque;
          console.log(`Saque efetuado! Seu saldo agora é: R$ ${saldo}`);
        }
        rl.close();
      });
      return;

    default:
      console.log("Operação inválida. Tente novamente.");
      rl.close();
      return;
  }
});