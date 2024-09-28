import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "11122233344";

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = "55566677788";

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(500);
contaCorrente1.cliente = cliente1;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;

contaCorrente1.transferir(300, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);
