// ** CAPTURANDO EVENTO NO SUBIMIT (fazer um form no html);

const form = document.querySelector('#formulario'); // Selecionando o formulário pelo id para manipulá-lo
form.addEventListener('submit', function (e) { // Seleciono qual evento eu desejo assistir ou escutar ...
                                               // 1º) Escolho quem eu quero manipuilar para a ação, que é o SUBMIT
                                               // 2º) Acrescento uma função, para criar o evento que eu quero, e coloco como parâmetro "e" que significa evento, poderia utilizar tambem "event"

  e.preventDefault();                          // 3º) event.preventDefault () impede que a ação padrão de um elemento aconteça. Nesse caso, impede que o botão enviar, envie o formulário, e ao clicar armazene a informação               
  const inputPeso = e.target.querySelector('#peso');   /* e.target vai me informar o elemento que está recebendo o evento */
  const inputAltura = e.target.querySelector('#altura'); /* Aqui estou pegando o input inteiro */

  const peso = Number(inputPeso.value); /* Aqui estou pegando o valor */
  const altura = Number(inputAltura.value);

  if (!peso){
   setResultado('Peso Invalido', false);
   return;
  }

  if (!altura){
    setResultado('Altura Invalido', false);
    return;
   }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`
  setResultado(msg, true)
} );    

/* CALCULANDO O IMC */

function getImc (peso, altura){
  const imc = peso / altura **2;
  return imc.toFixed(2);
}

/* CALCULANDO O NÍVEL DO IMC */

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// ** FUNÇÃO CRIAR P 

function criaP () {
  const p = document.createElement('p'); /* Criando elemento e depois inserir ele dentro do resultado */
  return p;
  
}

// ********  FUNÇÃO RESULTADO *********
// Nessa função eu acesso a div resultado que está em branco, crio um parágrafo dentro da div para poder manipular o resultado
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
   resultado.innerHTML = ''; /*Toda vez que chamar o resultado ele vai zerar, como já está na div */
    const p = criaP();

    /* Para analisar se o dado é válido */
    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }


    resultado.appendChild(p); /* Em resultado terá um FILHO P */
    p.innerHTML = msg;
}












/*  OUTRA FORMA DE FAZER A CRIAÇÕ DO P
function setResultado (msg){
    const resultado = document.querySelector('#resultado');
   resultado.innerHTML = ''; =  Toda vez que chamar o resultado ele vai zerar, como já está na div 
   const p = document.createElement('p'); = Criando elemento e depois inserir ele dentro do resultado 
   p.classList.add('paragrafo-resultado') =Para criar uma class nesse P
   p.innerHTML = 'Qualquer coisa'
   resultado.appendChild('p') Adiconando elemento dentro do filho 
}
*/

