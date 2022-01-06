function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoas = [
    {
        id: 1,
        nome: 'Arthur',
        idade: 24,
    },
    {
        id: 2,
        nome: 'Bruno',
        idade: 28,
    },
    {
        id: 3,
        nome: 'Camila',
        idade: 29,
    },
    {
        id: 4,
        nome: 'Diana',
        idade: 26,
    },
]

console.log(calculaIdade.call(pessoas[0], 20));     // -> Daqui a 20 anos, Arthur terá 44 anos de idade.
console.log(calculaIdade.apply(pessoas[3], [5]));   // -> Daqui a 5 anos, Diana terá 31 anos de idade.