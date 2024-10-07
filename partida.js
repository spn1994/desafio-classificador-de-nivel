function calcularRank(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  let calcularVitorias = vitorias - derrotas;
  
  // Determina o nível baseado no número de vitórias
  let nivel;
  if (calcularVitorias < 0) {
    nivel = "Ferro";
  } else if (calcularVitorias >= 11 && calcularVitorias <= 20) {
      nivel = "Bronze";
  } else if (calcularVitorias >= 21 && calcularVitorias <= 50) {
      nivel = "Prata";
  } else if (calcularVitorias >= 51 && calcularVitorias <= 80) {
      nivel = "Ouro";
  } else if (calcularVitorias >= 81 && calcularVitorias <= 90) {
      nivel = "Diamante";
  } else if (calcularVitorias >= 91 && calcularVitorias <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal";
  }

  // Retorna a mensagem
  return `O Herói tem de saldo de ${calcularVitorias} está no nível de ${nivel}`;
}

let vitorias = 800; // Substitua pelo número de vitórias
let derrotas = 780; // Substitua pelo número de derrotas
let resultado = calcularRank(vitorias, derrotas);
console.log(resultado);