
const formulario = document.getElementById('meuFormulario');
const paragrafoErro = document.getElementById('erro');

formulario.addEventListener('submit', function(event) {
    
    paragrafoErro.textContent = '';

    const nome = formulario.nome.value;
    const email = formulario.email.value;
    const idade = formulario.idade.value;

    if (nome === '') {
        event.preventDefault(); 
        paragrafoErro.textContent = 'Erro: O campo Nome não pode estar vazio.';
        return; 
    }

    
    
    if (!email.includes('@')) {
        event.preventDefault();
        paragrafoErro.textContent = 'Erro: O Email deve ser válido e conter "@".';
        return; 
    }

    
    if (Number(idade) <= 0 || idade === '') {
        event.preventDefault(); 
        paragrafoErro.textContent = 'Erro: A Idade deve ser um número maior que 0.';
        return; 
    }

    
    alert("Enviado! Todos os campos preenchidos com sucesso.");
});