const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe como surgiu o skate?",
        alternativas: [
            {
                texto: "Não faço ideia :(",
                afirmacao: "Você não manja sobre o skate."
            },
            {
                texto: "Lógico,foi um grupos de surfistas instalaram rodas e eixos nas pranchas para simular o surfe nas calçadas",
                afirmacao: "Você manja sobre o skate."
            }
        ]
    },
    {
        enunciado: "Quantos anos tem o skate?",
        alternativas: [
            {
                texto: "Mais de 50",
                afirmacao: "E conhece um pouco da historia."
            },
            {
                texto: "Menos de 50",
                afirmacao: "E não conhece sobre historia."
            }
        ]
    },
    {
        enunciado: "Você ja andou de skate?",
        alternativas: [
            {
                texto: "claro ;)",
                afirmacao: "Além disso,você é foda "
            },
            {
            
                texto: "Não,Tenho medo",
                afirmacao: "Além disso,você é um cagão "
            }
        ]
    },
    {
        enunciado: "Quando o skate virou esporte Olimpico?",
        alternativas: [
            {
                texto: "2021",
                afirmacao: "e também um atleta "
            },
            {
                texto: "2016",
                afirmacao: "e também um sendentario "
            }
        ]
    },
    {
        enunciado: "Quem deteem a maior nota do skate street Olimpico? ",
        alternativas: [
            {
                texto: "Yuto Horigome",
                afirmacao: "que não conhece nem seu próprio país"
            },
            {
                texto: "Raissa Leal(Fadinha)",
                afirmacao: "que conhece sobre o esporte no Brasil"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
