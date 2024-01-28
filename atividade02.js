const prompt = require('prompt-sync')();

let nomehos= prompt("Digite seu nome hospede ");
console.log(`ola ${nomehos} digite 1 para fazer Check-in `)
console.log(`ola ${nomehos} digite 2 chamar serviço de quarto `)
console.log(`ola ${nomehos} digite 3 Fazer pedido `)
console.log(`ola ${nomehos} digite 4  Fazer Check-out `)


let opçoes=parseInt( prompt("Digite um numero "));

switch (opçoes ) {
    case 1 :
            console.log(`Ola, ${nomehos} o seu Check-in ja esta em processamento   `)
        break;

    case 2 :
            console.log(`Ola, ${nomehos} o seu serviço de quarto ja esta em indo  `)
        break;    

        case 3 :
            console.log(`Ola, ${nomehos} o seu pedido ja esta em processamento `)
        break;       

        case 4 :
            console.log(`Ola, ${nomehos} o seu Check-out foi realizado `)
        break;

    default: console.log(`Ola, ${nomehos} digite a alternativa correta `)
        break;
}

    let numero1 =parseFloat( prompt("Digite o primeiro numero: "))
    let numero2 =parseFloat( prompt("Digite o segundo numero: "))

 soma=numero1+numero2;
 subtraçao=numero1-numero2;
 multiplicaçao=numero1*numero2;
 divisao=numero1/numero2;



let escolha = prompt("Escolha uma opção: + ,- ,* ou / ");


switch (escolha.toUpperCase()) {
    case '+':
        console.log("Você escolheu a Soma o total e ", soma );
        break;

    case '-':
        console.log("Você escolheu a subtraçao o total e ", subtraçao);
        break;

    case '*':
        console.log("Você escolheu  a Multiplicaçao o total e ", multiplicaçao );
        break;

    case '/':
        console.log("Você escolheu a divisao ", divisao );
        break;

    default:
        console.log("Escolha errrada ");
        break;
}

let nome= prompt("Ola qual e o seu nome ")
let sexo= prompt("Qual e o seu sexo (M para Masculino ou F para Feminino ")
let pesoAtual=prompt("Qual e o seu peso atual ")

let pesoIdealm= (pesoAtual -100)*0.9

let pesoIdealf= (pesoAtual -100)*0.85



switch (sexo.toLowerCase()) {
    case "m":
        console.log(`Ola ${nome} o seu peso ideal e  ${pesoIdealm}`)
        break;
    case "f" :
        console.log(`Ola ${nome} o seu peso ideal e  ${pesoIdealf}`)
    default:console.log(`Ola ${nome} Opçao incorreta`)
        break;
}

  let clinte= prompt("Digite o valor da compra ")

    clinteFun= clinte *0.9;

    clinteVip= clinte *0.95;

    console.log("Qual cliente voce e 1 funcionario, 2 cliente vip ou 3 cliente comum ")
 let tipos =parseInt( prompt("Qual cliente voce e 1, 2 ou 3 "))

 switch (tipos) {
    case 1:
        console.log(`Ola cliente comum o total da sua compra e R$ ${clinte}`)
        break;
        case 2:
            console.log(`Ola cliente funcionario o total da sua compra e R$ ${clinteFun} ` )
            break;
            case 3:
                console.log(`Ola cliente vip o total da sua compra e R$ ${clinteVip} ` )
                break;

    default:console.log("Ola tipo de cliente nao encotrado ")
        break;
 }


let numeroMes = parseInt(prompt("Digite o número do mês (1 a 12):"));


switch (numeroMes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Numero errado digite um numero de 1 a 12.");
}

   

    

    let escolha1 = parseInt(prompt("Digite 1 para taxa de natalidade e 2 para mortalidade "));

    switch (escolha1) {
        case 1:
            let numeroCn=parseInt(prompt("Número de crianças nascidas "))
            let numeroHabi=parseInt( prompt(" Número de habitantes; "))
            taxaDenatalinade=(numeroCn*1000)/numeroHabi;
            let taxaDenatalinade1= taxaDenatalinade.toFixed(2);
            console.log(`A taxa de natalidade e de ${taxaDenatalinade1}`)
            break;
           
                case 2:
                    let numeroObito=parseFloat((prompt("Número de obitos ")))
                    let numeroHabitantes=parseFloat( prompt(" Número de habitantes; "))
                    taxaDemoratalidade=(numeroObito*1000)/numeroHabitantes;
                    let taxaDemoratalidade1= taxaDemoratalidade.toFixed(2);
                    console.log(`A taxa de mortalidade e ${taxaDemoratalidade1}`)
                    break;


        default:console.log("Opcao errada")
            break;
    }

   
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let formaPagamento = parseInt(prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo):"));

    

switch (formaPagamento) {
  case 1:
    
    valorFinal = valorProduto - (valorProduto * 0.10);
    console.log(`O valor final do produto é: R$ ${valorFinal.toFixed(2)}`);
    break;
  case 2:
    
    valorFinal = valorProduto;
    console.log(`O valor final do produto é: R$ ${valorFinal.toFixed(2)}`);
    break;
  default:
    console.log(" Opçao invalida");
}



