const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#pergunta")
const btnPerguntar = document.querySelector("#btnPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode conta com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

btnPerguntar.addEventListener('click', () => {
  const pergunta = inputPergunta.value

  if (!pergunta) {
    alert("Digite sua pergunta")
    return
  }

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  elementoResposta.innerHTML = `
    <div>${pergunta}</div>
    ${respostas[numeroAleatorio]}
  `

  inputPergunta.value = ""
  btnPerguntar.disabled = true
})

inputPergunta.addEventListener('input', () => {
  !inputPergunta.value
  ? btnPerguntar.disabled = true
  : btnPerguntar.disabled = false
})