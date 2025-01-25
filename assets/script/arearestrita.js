 function exibirCompras() {
    const compras = JSON.parse(localStorage.getItem('compras')) || [];
    const container = document.getElementById('dadosCompras');
    container.innerHTML = '';

    if (compras.length === 0) {
        container.innerHTML = '<p>Nenhuma compra realizada.</p>';
        return;
    }

    compras.forEach((compra, index) => {
        const compraDiv = document.createElement('div');
        compraDiv.classList.add('card', 'mb-3');
        compraDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Carro: ${compra.carro}</h5>
                <p><strong>Nome:</strong> ${compra.nome}</p>
                <p><strong>Celular:</strong> ${compra.celular}</p>
                <p><strong>Email:</strong> ${compra.email}</p>
                <p><strong>Mensagem:</strong> ${compra.mensagem}</p>
                <button class="btn btn-danger" onclick="excluirCompra(${index})">Excluir</button>
            </div>
        `;
        container.appendChild(compraDiv);
    });
}
function excluirCompra(index) {
    let compras = JSON.parse(localStorage.getItem('compras')) || [];
    compras.splice(index, 1);
    localStorage.setItem('compras', JSON.stringify(compras)); 
    exibirCompras();
}
window.onload = exibirCompras;