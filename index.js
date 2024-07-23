let NomeHeroi = prompt("Digite o Nome do Herói: ")

let NivelHeroi = prompt("Digite a Quantidade de XP Acumulada Pelo Herói: ")

if (NivelHeroi <= 1000){
  NivelHeroi = ("Ferro")
}

if (NivelHeroi >= 1001 && NivelHeroi <= 2000){
 NivelHeroi = ("Bronze")
}

if (NivelHeroi >= 2001 && NivelHeroi <= 5000){
 NivelHeroi = ("Prata")
}

if (NivelHeroi >= 5001 && NivelHeroi <= 7000){
 NivelHeroi = ("Ouro")
}

if (NivelHeroi >= 7001 && NivelHeroi <= 8000){
    NivelHeroi = ("Platina")
}

if (NivelHeroi >= 8001 && NivelHeroi <= 9000){
    NivelHeroi = ("Ascendente")
}

   if (NivelHeroi >= 9001 && NivelHeroi <= 10000){
    NivelHeroi = ("Imortal")
   
}

   if (NivelHeroi >= 10001){
    NivelHeroi = ("Radiante")
}

console.log("O Herói de Nome " + NomeHeroi + " Esta no Nivel de " + NivelHeroi)
