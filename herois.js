class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão para definir o tipo de ataque
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque indefinido";
        break;    }

    // Exibindo a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let mago = new Heroi("Giroflex", 100, "mago");
mago.atacar(); // O mago atacou usando magia

let guerreiro = new Heroi("Bágua", 20, "guerreiro");
guerreiro.atacar(); // O guerreiro atacou usando espada

let monge = new Heroi("Liu Kang", 16, "monge");
monge.atacar(); 

let ninja = new Heroi("Sergio", 18, "ninja");
ninja.atacar(); 
