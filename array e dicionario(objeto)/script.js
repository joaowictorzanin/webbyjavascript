var lista = ["Macaco", "Cachorro", "Gato"]

lista.push("Arara") //coloca um elemente
lista.pop() //retira o ultimo elemento


console.log(lista)
console.log(lista[1])
console.log(lista.length) //mostra a quantidade de index
console.log(lista.reverse()) // coloca de trás para frente
console.log(lista.toLocaleString()) // converte para string
console.log(lista.join(" | ")) // também converte para string, mas voc6e pode colocar o que quer para separar um item do outro

var objeto = {nome : "Maça", cor: "Vermelha"}
console.log(objeto)
console.log(objeto.nome)
console.log(objeto.cor)

var objeto2 = [{aluno: "Joao", id: 12345}, {aluno: "pedro", id : 23456}]
console.log(objeto2)
console.log(objeto2[0].aluno)
console.log(objeto2[1].id)