const formulario = document.getElementById('formularioContato');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if(!emailValido.test(email)) {
        alert('Digite um e-mail válido!');
        return;
    }

    alert('Mensagem enviada com sucesso!');

    formulario.reset();
});

const temaBtn = document.getElementById('temaBtn');

temaBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
});
