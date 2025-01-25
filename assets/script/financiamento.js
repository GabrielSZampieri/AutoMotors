document
        .getElementById("formFinanciamento")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const valorVeiculo = parseFloat(
            document.getElementById("valorVeiculo").value
          );
          const entrada = parseFloat(document.getElementById("entrada").value);
          const parcelas = parseInt(document.getElementById("parcelas").value);
          const taxaJuros = parseFloat(
            document.getElementById("taxaJuros").value
          );

          const valorFinanciado = valorVeiculo - entrada;
          const taxaJurosMensal = taxaJuros / 100 / 12;
          const parcelaMensal =
            (valorFinanciado *
              taxaJurosMensal *
              Math.pow(1 + taxaJurosMensal, parcelas)) /
            (Math.pow(1 + taxaJurosMensal, parcelas) - 1);
          const valorTotal = parcelaMensal * parcelas;
          const valorJuros = valorTotal - valorFinanciado;

          const formatoMoeda = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          document.getElementById("valorFinanciado").textContent =
            formatoMoeda.format(valorFinanciado);
          document.getElementById("parcelaMensal").textContent =
            formatoMoeda.format(parcelaMensal);
          document.getElementById("valorTotal").textContent =
            formatoMoeda.format(valorTotal);
          document.getElementById("valorJuros").textContent =
            formatoMoeda.format(valorJuros);

          document.getElementById("resultado").style.display = "block";
        });