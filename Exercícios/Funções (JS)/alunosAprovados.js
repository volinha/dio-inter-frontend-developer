const alunos = [
    {
        nome: 'Arthur',
        nota: 4,
    },
    {
        nome: 'Bruno',
        nota: 8,
    },
    {
        nome: 'Camila',
        nota: 9,
    },
    {
        nome: 'Diana',
        nota: 6,
    },
    {
        nome: 'Éverton',
        nota: 6,
    }
]

function aprovados(alunos, media) {             //função que recebe array alunos e o valor da média final
    let listaAprovados = [];

    for (let i = 0; i < alunos.length; i++){    // percorre o array
        let { nome, nota } = alunos[i];         // object destructuring para manipular as propriedades de cada aluno

        if (nota >= media){
            listaAprovados.push(nome);          // popula o array auxiliar com alunos com media maior ou igual a final
        }
    }

    return listaAprovados;
}

console.log(aprovados(alunos, 6));