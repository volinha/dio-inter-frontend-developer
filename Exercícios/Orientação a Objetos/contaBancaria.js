class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo) {
            return "Saldo insuficiente para a transação!";
        } 
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        if(valor <= 0){
            return "Valor inválido para depósito!"
        }
        this._saldo =  this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta-corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(numero){
        this._cartaoCredito = numero;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta-poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta-universitaria'
    }

    sacar(valor){
        if(valor > 500 || valor > this._saldo) return "Operação inválida (maior que R$ 500 ou saldo insuficiente)!"

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}