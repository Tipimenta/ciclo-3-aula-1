const btnCalcularDom = document.querySelector(".calcular");
const btnSimDom = document.querySelector(".sim");
const btnNaoDom = document.querySelector(".nao");
const conteudoModalDom = document.querySelector(".modal-content");
const conteudoinfo = document.createElement("div");
btnCalcularDom.addEventListener("click", verificarConta);

function verificarConta() {
  const modalDom = document.querySelector(".modal");
  const valorTotalDom = document.querySelector(".valorTotal").value;
  const taxaDom = document.querySelector(".taxa").value;
  const pagantesDom = document.querySelector(".pagantes").value;
  const gorgetaDom = document.querySelector(".gorjetas").value;
  const aValorPositivoDom = document.querySelector(".aValorPositivo");
  const aValorNumericoDom = document.querySelector(".aValorNumerico");
  const aPagantesPositivoDom = document.querySelector(".aPagantesPositivo");
  const aGorjetaPositivoDom = document.querySelector(".aGorjetaPositivo");
  const aGorjetaNumericoDom = document.querySelector(".aGorjetaNumerico");
  const aCamposVaziosDom = document.querySelector(".aCamposVazios");

  let op=0;

    (valorTotalDom == "" || pagantesDom == "" || taxaDom == "") ? 
    (aCamposVaziosDom.style.display = "block", op++) : (aCamposVaziosDom.style.display = "none");

   isNaN(valorTotalDom) ? (aValorNumericoDom.style.display = "block", op++) : (aValorNumericoDom.style.display = "none");

    isNaN(pagantesDom)? (aPagantesPositivoDom.style.display = "block", op++) : (aPagantesPositivoDom.style.display = "none");

    isNaN(gorgetaDom)? (aGorjetaNumericoDom.style.display = "block", op++) : (aGorjetaNumericoDom.style.display = "none");

    gorgetaDom < 0? (aGorjetaPositivoDom.style.display = "block", op++) : (aGorjetaPositivoDom.style.display = "none");

    valorTotalDom <= 0? (aValorPositivoDom.style.display = "block", op++) : (aValorPositivoDom.style.display = "none");
    
    pagantesDom < 1? (aPagantesPositivoDom.style.display = "block", op++) : (aPagantesPositivoDom.style.display = "none");


  if(op == 0){
  conteudoinfo.innerHTML = `<h2>Esse pagamento terá desconto?</h2>
        <p>Apenas para contas pagas em pix, débito ou dinheiro</p>
        <div class="buttons">
        <button class="nao taxa">Não</button>
        <button class="sim taxa">Sim</button>`;
  conteudoModalDom.style.height = "194px";
  conteudoModalDom.appendChild(conteudoinfo);
  modalDom.style.display = "flex";
  }
}

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("sim")) {
    const valorTotalDom = parseFloat(
      document.querySelector(".valorTotal").value
    );
    const taxaDom = document.querySelector(".taxa").value;
    const pagantesDom = parseFloat(document.querySelector(".pagantes").value);
    const gorgetaDom = parseFloat(document.querySelector(".gorjetas").value);
    let taxa = 0;
    let valorConta = 0;

    if (taxaDom == "Sim") {
      taxa = 5;
      console.log(valorTotalDom);
      console.log(pagantesDom);
      valorConta = (
        (valorTotalDom * 0.9 + taxa + gorgetaDom) /
        pagantesDom
      ).toFixed(2);
      console.log(valorConta);
    } else {
      console.log(valorTotalDom);
      console.log(pagantesDom);
      valorConta = ((valorTotalDom * 0.9 + gorgetaDom) / pagantesDom).toFixed(
        2
      );
      console.log(valorConta);
    }

    conteudoinfo.innerHTML = `<h2>Valor da conta:</h2>
        <p>Total do consumo: RS ${(valorTotalDom * 0.9).toFixed(2)}</p>
        <p>Taxa de serviço: R$ ${taxa.toFixed(2)}</p>
        <p>Valor da gorjeta: R$ ${gorgetaDom.toFixed(2)}</p>
        <p>Total por pessoa: R$ ${valorConta}</p>
        <button class="concluir">Concluir</button>`;
    conteudoModalDom.style.height = "282px";
    conteudoModalDom.appendChild(conteudoinfo);
  } else if (event.target.classList.contains("nao")) {
    const valorTotalDom = parseFloat(
      document.querySelector(".valorTotal").value
    );
    const taxaDom = document.querySelector(".taxa").value;
    const pagantesDom = parseFloat(document.querySelector(".pagantes").value);
    const gorgetaDom = parseFloat(document.querySelector(".gorjetas").value);
    let valorConta = 0;
    let taxa = 0;

    if (taxaDom == "Sim") {
      taxa = 5;
      console.log(valorTotalDom);
      console.log(pagantesDom);
      valorConta = ((valorTotalDom + taxa + gorgetaDom) / pagantesDom).toFixed(
        2
      );
      console.log(valorConta);
    } else {
      console.log(valorTotalDom);
      console.log(pagantesDom);
      valorConta = ((valorTotalDom + gorgetaDom) / pagantesDom).toFixed(2);
      console.log(valorConta);
    }

    conteudoinfo.innerHTML = `<h2>Valor da conta:</h2>
        <p>Total do consumo: RS ${valorTotalDom.toFixed(2)}</p>
        <p>Taxa de serviço: R$ ${taxa.toFixed(2)}</p>
        <p>Valor da gorjeta: R$ ${gorgetaDom.toFixed(2)}</p>
        <p>Total por pessoa: R$ ${valorConta}</p>
        <button class="concluir">Concluir</button>`;
    conteudoModalDom.style.height = "282px";
    conteudoModalDom.appendChild(conteudoinfo);
  }
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("concluir")) {
    document.querySelector(".valorTotal").value = "";
    document.querySelector(".taxa").value = "Sim";
    document.querySelector(".pagantes").value = "";
    document.querySelector(".gorjetas").value = "0";
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    return;
  }
});

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  document.querySelector(".valorTotal").value = "";
  document.querySelector(".taxa").value = "Sim";
  document.querySelector(".pagantes").value = "";
  document.querySelector(".gorjetas").value = "0";
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

function formatarMoeda(valor) {
  // Função para formatar o valor como moeda brasileira
  valor = valor.replace(/[^0-9,-.]/g, ""); // Remove caracteres inválidos
  valor = valor.replace(/,/g, "."); // Troca vírgulas por pontos
  valor = parseFloat(valor).toFixed(2); // Formata com duas casas decimais
  return "R$ " + valor.replace(/\./g, ","); // Adiciona símbolo de moeda e formata milhares
}

function onValorChange() {
  var valorFormatado = formatarMoeda(
    document.querySelector(".valorTotal").value
  );
  document.querySelector(".valorTotal").value = valorFormatado;
}
