alert("Bem vindo ao jogo do número secreto");

let numeroSecreto = 5, chute, tentativas = 1;

console.log(numeroSecreto);

//Enquanto chute não for igual ao número secreto
while(chute != numeroSecreto ){
    chute = prompt("Escolha um número entre 1 e 10");

    //Se chute for igual ao número secreto
    if(chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
        }else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}


