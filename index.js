class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor)
            this.saldo -= valor;
    }
}

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = '11122233344';

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = '55566677788';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

contaCorrenteRicardo.saldo = 100;

console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.sacar(200);

console.log(contaCorrenteRicardo.saldo);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 0;

console.log(cliente1);
console.log(cliente2);
