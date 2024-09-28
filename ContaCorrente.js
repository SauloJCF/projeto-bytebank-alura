import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  _cliente;
  _saldo = 0;

  agencia;

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente || novoValor === null) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo < valor) return;

    this._saldo -= valor;

    return valor;
  }

  depositar(valor) {
    if (valor <= 0) return;

    this._saldo += valor;

    return valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
