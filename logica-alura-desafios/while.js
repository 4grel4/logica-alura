let numeroSecreto = 5;
let tentativas = 1;
let chute;

// enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero de 1 e 10');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute} `);
        } else {
            alert(`O número é secreto é maior que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas ++;
    }
}
// operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);

/* if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativa.`);
} */