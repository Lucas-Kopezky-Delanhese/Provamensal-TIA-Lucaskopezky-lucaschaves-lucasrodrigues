import { palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasPapoFurado, mostProbablyQuestion} from './blabla.js'


// Separe a frase em uma array de palavras
let pergunta = "Qual o nome do fundador da instituição? Quem era ele?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')
// Tirar da pergunta o "?"

// Separe a frase em uma array de palavras
let pergunta1 = "A escola oferece curso técnico? Quais?"
pergunta1 = pergunta1.toLowerCase()
pergunta1 = pergunta1.split(' ')
// Tirar da pergunta o "?"

// Separe a frase em uma array de palavras
let pergunta2 = "Onde entro em contato pra matricula ou rematricula?"
pergunta2 = pergunta2.toLowerCase()
pergunta2 = pergunta2.split(' ')
// Tirar da pergunta o "?"

const bancos = [
    palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasPapoFurado
]
// ["minha", "pergunta", "é", "essa"]
for (let i = 0; i < pergunta.length; i++) { // Palavra i
    for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

// ["minha", "pergunta", "é", "essa"]
for (let i = 0; i < pergunta1.length; i++) { // Palavra i
    for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

// ["minha", "pergunta", "é", "essa"]
for (let i = 0; i < pergunta2.length; i++) { // Palavra i
    for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

console.log("Olá! Seja bem-vindo ao nosso chatbot! Meu nome é chatbot. Como posso ajudar?")

console.log(mostProbablyQuestion(pergunta))
// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)
  console.log(showAnswer(index))
  console.log(mostProbablyQuestion(pergunta1))
// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)
  console.log(showAnswer(index))
  console.log(mostProbablyQuestion(pergunta2))
// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)
  console.log(showAnswer(index))



