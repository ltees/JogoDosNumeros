alert("Bem vindo ao jogo do número secreto!");
let numeroTentativas = 100;
let numeroSecreto = parseInt(Math.random() * numeroTentativas + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// Enquanto(while) chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroTentativas}`);

    // Se(if) chute for igual ao número secreto, correto. Se não(else) errado.
    if (chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

// Operador ternário = Se "tentativas" for maior que 1 vai aparecer tentativas, se não ":" tentativa
let palavraTentativa = tentativas > 1 ? "tentativas" : "Tentativa";
alert(`Parabéns! Este é o número secreto ( ${numeroSecreto} ) com ${tentativas} ${palavraTentativa}`);
