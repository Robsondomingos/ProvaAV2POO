class Veiculo {
    constructor(rodas,combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
    }
    acelerar() {
        console.log('Acelerou');
            }        
}
class Moto extends Veiculo {
  constructor(rodas,combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}console.log('Empinou com ' + this.rodas + ' rodas');

   const honda = new Moto (2,'gasolina',true);
   const BMW = new Veiculo(2,'gasolina');
   