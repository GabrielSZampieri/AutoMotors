const cars = [
    { id: 1, marca: 'BMW', modelo: '320i', ano: 2023, km: 8525, preco: 304265, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/09/01.1-28-825x483.jpeg.webp' },
    { id: 2, marca: 'RAM', modelo: 'RAMPAGE', ano: 2024, km: 18000, preco: 223905, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/10/01.1-6.jpeg' },
    { id: 3, marca: 'CAOA CHERY', modelo: 'TIGGO 8', ano: 2022, km: 50000, preco: 144900, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/10/01.1-5.jpeg' },
    { id: 4, marca: 'LAND ROVER', modelo: 'DISCOVERY', ano: 2024, km: 3000, preco: 441900, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/09/01.1-47.jpeg' },
    { id: 5, marca: 'VOLVO', modelo: 'XC60 T8', ano: 2021, km: 27000, preco: 269900, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/09/01.1-43.jpeg' },
    { id: 6, marca: 'PORSCHE', modelo: 'TAYCAN 4S', ano: 2021, km: 18000, preco: 569900, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/09/01.2-1-e1725390305961.jpeg' },
    { id: 7, marca: 'BYD', modelo: 'SONG PLUS (HIBRIDO)', ano: 2024, km: 0, preco: 234500, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01.1-20-798x466.jpeg.webp' },
    { id: 8, marca: 'LAND ROVER', modelo: 'EVOQUE', ano: 2021, km: 30000, preco: 269900, imagem: 'https://monacoautomoveis.com.br/wp-content/uploads/2024/09/01.1-6.jpeg' },
    { id: 9, marca: 'AUDI', modelo: 'A4', ano: 2022, km: 39000, preco: 248900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/06/01.1-44-798x466.jpeg.webp' },
    { id: 10, marca: 'HONDA', modelo: 'NC 750X', ano: 2024, km: 3900, preco: 59900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01-798x466.jpeg.webp' },
    { id: 11, marca: 'JEEP', modelo: 'COMPASS LONGITUDE', ano: 2022, km: 85000, preco: 131900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01.1-28-798x466.jpeg.webp' },
    { id: 12, marca: 'VOLKSWAGEN', modelo: 'JETTA GLI', ano: 2023, km: 23000, preco: 209900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01.1-30-798x466.jpeg.webp' },
    { id: 13, marca: 'CHEVROLET', modelo: 'S10 COUNTRY', ano: 2024, km: 0, preco: 314900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01.1-7-798x466.jpeg.webp' },
    { id: 14, marca: 'BMW', modelo: '328i', ano: 2015, km: 115900, preco: 121900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/09/01.1-42-798x466.jpeg.webp' },
    { id: 15, marca: 'MINI', modelo: 'COOPER SE', ano: 2022, km: 25500, preco: 227900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/10/01.1-4-798x466.jpeg.webp' },
    { id: 16, marca: 'LAND ROVER', modelo: 'VELAR', ano: 2021, km: 35200, preco: 416900, imagem: 'https://monacoautomoveis.com.br/wp-content/webp-express/webp-images/uploads/2024/09/01.1-37-798x466.jpeg.webp' },

    
  
  ];
  
  function exibirCarros() {
    const listaDeCarros = document.getElementById('listaDeCarros');
    listaDeCarros.innerHTML = '';
  
    cars.forEach(carro => {
        const cartaoCarro = `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card">
                <img src="${carro.imagem}" class="card-img-top car-img" alt="${carro.marca} ${carro.modelo}">
                <div class="card-body">
                    <h5 class="card-title">${carro.marca} ${carro.modelo}</h5>
                    <p class="card-text">Ano: ${carro.ano}</p>
                    <p class="card-text">Km: ${carro.km}</p>
                    <p class="card-text">Preço: R$ ${carro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <a href="#" class="btn btn-primary" onclick="comprarCarro(${carro.id})">Comprar</a>
                </div>
            </div>
        </div>
        `;
        listaDeCarros.innerHTML += cartaoCarro;
    });
  }
  
  window.onload = exibirCarros;
  
  
  function comprarCarro(id) {
    const carroSelecionado = cars.find(carro => carro.id === id);
    
    const formulario = `
        <div class="container mt-5">
            <h3>Finalizar Compra - ${carroSelecionado.marca} ${carroSelecionado.modelo}</h3>
            <form id="formCompra">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" required>
                </div>
                <div class="mb-3">
                    <label for="celular" class="form-label">Celular</label>
                    <input type="tel" class="form-control" id="celular" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="mensagem" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="mensagem" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Enviar</button>
            </form>
        </div>
    `;
  
    document.getElementById('listaDeCarros').innerHTML = formulario;
    document.getElementById('formCompra').onsubmit = function(event) {
        event.preventDefault();
        salvarCompra(carroSelecionado);
    };
  }
  
  function salvarCompra(carro) {
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    const novaCompra = {
        carro: `${carro.marca} ${carro.modelo}`,
        nome,
        celular,
        email,
        mensagem
    };
  
    let compras = JSON.parse(localStorage.getItem('compras')) || [];
  
   
    compras.push(novaCompra);
  
   
    localStorage.setItem('compras', JSON.stringify(compras));
  
    window.location.href = 'index.html';
  }
  