class CuentaBancaria {
    constructor(saldo) {
      this.saldo = saldo;
    }
  
    depositar(n) {
      this.saldo += n;
      return this.saldo;
    }
  
    retirar(n) {
      if (n > this.saldo) throw new Error("Fondos insuficientes");
      this.saldo -= n;
      return this.saldo;
    }
  }
  
  export default CuentaBancaria;
  