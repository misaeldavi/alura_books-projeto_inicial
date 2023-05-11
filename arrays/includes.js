let nomes = ['João', 'Juliana', 'Caio', 'Ana']
let notas = [10, 8, 7.5, 9]
let listaDeNomesENotas = [nomes, notas]
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNomesENotas[0].includes(nomeDoAluno)) {
        indice = listaDeNomesENotas[0].indexOf(nomeDoAluno)
        return `${listaDeNomesENotas[0][indice]} ${listaDeNomesENotas[1][indice]}`
    } else {
        return 'Aluno não está cadastrado!'
    }
}

console.log(exibeNomeNota("Juliana"))