let contador = 0;

const tagNumero = document.getElementById('numero');
const botaoDecrementar = document.getElementById('btnDecrementar');
const botaoZerar = document.getElementById('btnZerar');
const botaoIncrementar = document.getElementById('btnIncrementar');

function atualizarTela() {
        tagNumero.textContent = contador;

        if (contador > 0) {
        tagNumero.style.color = 'green'; 
    } else if (contador < 0) {
        tagNumero.style.color = 'red';   
    } else {
        tagNumero.style.color = 'black'; 
        }
}


botaoIncrementar.addEventListener('click', function() {
    contador = contador + 1; 
    atualizarTela();         
});


botaoDecrementar.addEventListener('click', function() {
    contador = contador - 1; 
    atualizarTela();         
});

botaoZerar.addEventListener('click', function() {
    contador = 0;            
        atualizarTela();         
});