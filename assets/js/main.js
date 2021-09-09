// ** capturando evento de submit do formulário (fazer um form no html);

const form = document.querySelector('#formulario'); // Selecionando o formulário pelo id para manipulá-lo
form.addEventListener('submit', function (e) { // Seleciono qual evento eu desejo assistir ou escutar ...
                                               // 1º) Escolho quem eu quero manipuilar para a ação, que é o SUBMIT
                                               // 2º) Acrescento uma função, para criar o evento que eu quero, e coloco como parâmetro "e" que significa evento, poderia utilizar tambem "event"

  e.preventDefault();                          // 3º) event.preventDefault () impede que a ação padrão de um elemento aconteça. Nesse caso, impede que o botão enviar, envie o formulário, e ao clicar armazene a informação               
  console.log('Evento prevenido')
  setResultado() // Toda vez que eu enviar o formulário, sairá o resultado no html
} );    


// ** FUNÇÃO RESULTADO

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ` <p> ${msg}</p>`; /* O que eu escrever no parâmetro, sairá no html no espaço da div resultado */
}

                                  