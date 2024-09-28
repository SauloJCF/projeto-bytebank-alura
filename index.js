import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", "11122233344");
const cliente2 = new Cliente("Alice", "55566677788");

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente(cliente2, 1001);

contaCorrente1.transferir(300, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);

console.log(ContaCorrente.numeroDeContas);

