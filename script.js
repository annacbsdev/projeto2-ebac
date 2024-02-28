const formContato = document.getElementById('formContato');
const tabelaContatos = document.getElementById('tabelaContatos');
const tbody = tabelaContatos.querySelector('tbody');

formContato.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);
    limparFormulario();
});

function adicionarContato(nome, telefone) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
    tbody.appendChild(newRow);
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
