//Seleciona a tag form e elementos da resposta no caso tag h3 e h4

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//Cria uma execução de evento, que ao clicar no input submit e acionado

frm.addEventListener("submit", (e) => {
    e.preventDefault()                    //Evita o envio do form
    const nome = frm.inNome.value;        //Obtém os valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2     //Caucula a média das notas
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`
    //Cria as condições
    if (media >= 7) {
        resp2.innerText = `Parabens ${nome}! Você foi aprovado(a)`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado (a)`
        resp2.style.color = "red"
    }
})