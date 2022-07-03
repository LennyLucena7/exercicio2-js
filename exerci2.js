let nome1 = prompt("Nome do primeiro usuario");
let idade1 =prompt("Idade do primeiro usuario");

let nome2 = prompt("Nome do segundo usuario");
let idade2 = prompt("Idade do segundo usuario");


console.log("Arquivos de " + nome1 + " e "+ nome2);
console.log("Idade de " + nome1 + ": " + idade1 +"\nIdade de " + nome2 + ": " + idade2);

if( idade1 > idade2){
   alert(`Ola Lenny a sua idade é ${idade1}`)
}else if(idade1 < idade2){
  alert("O usuario 1 é mais novo que o usurario 2")
   
}else{
    
}
