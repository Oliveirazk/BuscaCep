//CRIAR A FUNÇÃO PARA COLETAR O CEP

function Coletar() {
  let input = document.querySelector(".input-cep").value;
  Dados(input);
}

//FUNÇÃO PARA CONSUMIR API VIA CEP
async function Dados(input) {
  let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(
    (response) => response.json()
  );
  console.log(dados);
  ExibirDados(dados);
}

//FUNÇÃO INSERIR DADOS NA TELA
function ExibirDados(dados) {
  console.log(dados.uf);
  document.querySelector('.estado').value = dados.uf;
  document.querySelector('.cidade').value = dados.localidade;
  document.querySelector('.bairro').value = dados.bairro;
  document.querySelector('.endereco').value = dados.logradouro;
  document.querySelector('.ddd').value = dados.ddd;
  document.querySelector('.ibge').value = dados.ibge
}
