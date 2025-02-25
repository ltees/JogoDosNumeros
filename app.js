alert("Bem vindo ao jogo do número secreto");

let chute, tentativas = 1, numeroMaximo = 5000, numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

//ENQUANTO chute não for igual ao número secreto
while(chute != numeroSecreto ){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //SE chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
        }else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}

//Dois modos de mostrar quantas tentativas foram feitas:
let palavraTentativa = tentativas > 1 ? "tantativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 

//if(tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else{
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
