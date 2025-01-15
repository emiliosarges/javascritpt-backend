// Declaração das variáveis
let saldo = 1000; // Saldo inicial
let deposito = 200; // Valor a ser depositado
let saque = 300; // Valor a ser sacado
let operacao; // Variável para armazenar o resultado das operações

// Operação de depósito (adição ao saldo)
operacao = saldo + deposito;
console.log(`Após o depósito de R$ ${deposito}, o saldo é de R$ ${operacao}.`);

// Atualiza o saldo com o valor do depósito
saldo = operacao;

// Operação de saque (subtração do saldo)
operacao = saldo - saque;
console.log(`Após o saque de R$ ${saque}, o saldo final é de R$ ${operacao}.`);

// Atualiza o saldo com o valor final após o saque
saldo = operacao;

// Exibe o saldo final
console.log(`Saldo final na conta bancária: R$ ${saldo}.`);
