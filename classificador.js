// Definindo uma lista de heróis com nome e XP
let herois = [
  { nome: "Sergio", xp: 500 },
  { nome: "Everaldo", xp: 9500 },
  { nome: "Suely", xp: 3000 },
  { nome: "Metodio", xp: 11000 }
];

// Função para definir o nível do herói
function definirNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 5000) {
    return "Prata";
  } else if (xp <= 7000) {
    return "Ouro";
  } else if (xp <= 8000) {
    return "Platina";
  } else if (xp <= 9000) {
    return "Ascendente";
  } else if (xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Laço de repetição para processar herói
for (let i = 0; i < herois.length; i++) {
  // Acesso a cada herói 
  const heroi = herois[i];  
  // Chamar a função definirNivel passando heroi.xp
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${definirNivel(heroi.xp)}`);
}
