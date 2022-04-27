var idade = Number(prompt("Qual a sua idade? "))
if(idade >= 18){
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}

var contador = 0
while(contador < 5){
    console.log(contador)
    contador ++
}

var contador2
for(contador2 = 0; contador2 < 5; contador2 ++){
    console.log(contador2)
}

var dataAtual = new Date()
console.log(dataAtual)
console.log(dataAtual.getDate())
console.log(dataAtual.getMonth())
console.log(dataAtual.getFullYear())