// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

export const palavrasPapoFurado = {
    probablyWords: [
        "basquete", "triatlo", "ping-pong",
        "escola", "sair", "Bentinho", "ESCOLA AMERICANA, Bairro Chácara da Barra", "COLÉGIO NOTRE DAME – Bairro Notre Dame", "Ecobear", "alcool", "bar", "zoológico", "HB20", "agiotagem"
    ],
    matched: 0,
}

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição
function showAnswer(index) {
    switch (index) {
        case 0:
            return "Quem fundou a escola foi Paul Pogba, um dos melhores professores de todos os tempos"
        case 1:
            return "Sim! informatica, Games, Publicidade"
        case 2:
            return "Voce pode entrar em contato para matricula pelo telefone (19) 98140-0709, e para rematricula pelo e-mail Escola@hotmail.com" 
        case 3:
            return "Só sei falar sobre escola, caso seja matricula, fundação ou cursos"
    }
    
}

export function mostProbablyQuestion(pergunta) {
    if (pergunta.includes[palavrasPapoFurado]) {
        return "não falo sobre isso"
    }
    let matches = [
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched, 
        palavrasMatricula.matched,
        palavrasPapoFurado.matched,
    ]
    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}

export function responderperguntas(pergunta) {
  
}

