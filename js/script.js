// script de marcar a pagina selecionado
const menu = document.querySelectorAll(".header-menu li a");

function select(pagina) {
  const url = pagina.href;
  const ativa = location.href;
  if (ativa.includes(url)) {
    pagina.classList.add("ativo");
  }
}

menu.forEach(select);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativado = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativado);
}

function eventoPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPergunta);
