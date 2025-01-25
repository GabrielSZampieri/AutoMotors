
const form = document.querySelector('form');
const nomeInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const mensagemInput = document.querySelector('textarea[name="mensagem"]');
const btnEnviar = document.querySelector('.btn');


function validarFormulario(event) {
    let formValido = true;

    
    document.querySelectorAll('.error').forEach(error => error.remove());

  
    if (nomeInput.value.trim() === '') {
        formValido = false;
        mostrarErro(nomeInput, 'Por favor, digite seu nome.');
    }

  
    if (emailInput.value.trim() === '') {
        formValido = false;
        mostrarErro(emailInput, 'Por favor, digite seu e-mail.');
    } else if (!validarEmail(emailInput.value)) {
        formValido = false;
        mostrarErro(emailInput, 'Por favor, digite um e-mail válido.');
    }

 
    if (mensagemInput.value.trim() === '') {
        formValido = false;
        mostrarErro(mensagemInput, 'Por favor, digite sua mensagem.');
    }


    if (!formValido) {
        event.preventDefault();
    }
}


function mostrarErro(elemento, mensagem) {
    const erro = document.createElement('span');
    erro.classList.add('error');
    erro.style.color = 'red';
    erro.style.fontSize = '12px';
    erro.textContent = mensagem;
    elemento.parentNode.appendChild(erro);
}


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


btnEnviar.addEventListener('click', validarFormulario);
