const listaDePrecos = [
    {
        id: 1,
        desc: 'abacaxi',
        valor: 2.3
    },
    {
        id: 2,
        desc: 'kiwi',
        valor: 7
    },
    {
        id: 3,
        desc: 'uva',
        valor: 2.2
    },
    {
        id: 4,
        desc: 'pera',
        valor: 1.4
    },
    {
        id: 5,
        desc: 'tomate',
        valor: 6
    },
]

const saldo = 50;

const subtraiSaldo = function (lista,saldo) {
    return lista.reduce(function (prev, curr) {
        return prev - curr.valor;
    }, saldo)
};

console.log(subtraiSaldo(listaDePrecos,saldo));