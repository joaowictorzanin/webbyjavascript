/*function some(n1, n2) {
    console.log(n1 + n2)
}*/

/*function setReplace(frasePadrao, nome, novo_nome) {
    console.log(frasePadrao.replace(nome, novo_nome))
}*/

/*var frase = prompt("Digite uma frase: ")
var subistituir = prompt(frase + "\nQual palavra você quer trocar?")
var subistituinte = prompt("Qual palava você quer colocar no lugar?")
*/

function validarIdade(idade){
    var validar
    if (idade >= 18 ){
        validar = true
    } else{
        validar = false
    } return validar
}

var idadeUser = Number(prompt("Digite sua idade"))
console.log((validarIdade(idadeUser)))

/*some(4, 6)
setReplace(frase, subistituir, subistituinte)
*/
