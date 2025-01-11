const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const respostas = {
    "oi": "Olá! Como posso ajudar você?",
    "tudo bem?": "Estou bem, obrigado por perguntar! E você?",
    "qual é o seu nome?": "Sou um chatbot simples criado em Node.js.",
    "adeus": "Tchau! Foi um prazer falar com você."
};

function chatbot() {
    rl.question("Você: ", (mensagem) => {
        const resposta = respostas[mensagem.toLowerCase()] || 
            "Desculpe, não entendi sua pergunta. Tente novamente!";
        console.log(`Bot: ${resposta}`);
        
        if (mensagem.toLowerCase() === "adeus") {
            rl.close();
        } else {
            chatbot(); 
        }
    });
}

console.log("Bot: Olá! Sou seu chatbot. Pergunte algo ou digite 'adeus' para sair.");
chatbot();