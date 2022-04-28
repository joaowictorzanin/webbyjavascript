function clicar(){
    var operacao = document.querySelector('input[name="operacao"]:checked')
    var numero1 = document.getElementById('numero1')
    var numero2 = document.getElementById('numero2')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var resultado
    
    if (numero1.value.length == 0 || numero2.value.length == 0 ) {
       alert('[ERROR] Preencha um numero')
    }else{

        function soma(){
            resultado = n1 + n2
            alert(`O resultado da soma é: ${resultado}`)
            novaOperação()
        }

        function subtracao(){
            resultado = n1 - n2
            alert(`O resultado da subtração é: ${resultado}`)
            novaOperação()
        }

        function multiplicacao(){
            resultado = n1 * n2
            alert(`O resultado da multiplicação é: ${resultado}`)
            novaOperação()
        }

        function divisaoReal(){
            resultado = n1 / n2
            alert(`O resultado da divisão é: ${resultado}`)
            novaOperação()
        }

        function divisaoInteiro(){
            resultado = n1 % n2
            alert(`O resultado do resto da divisão é: ${resultado}`)
            novaOperação()
        }

        function potenciacao(){
            resultado = n1 ** n2
            alert(`O resultado da potencição é: ${resultado}`)
            novaOperação()
        }
        function novaOperação(){
            var escolha = Number(prompt('Deseja fazer uma nova operação?\n 1- Sim\n 2- Não'))
            if (escolha == 1) {
                location.reload()
            } else if(escolha == 2){
                location.href = 'https://www.dio.me/'
            } else {
                alert('[ERROR] Resposta Invalida')
                novaOperação()
            }
        }    

        switch (operacao.value) {
            case 'soma' :
                soma()
                break;
            case 'subtracao' :
                subtracao()
                break;
            case 'multiplicacao' :
                multiplicacao()
                break;
            case 'divisaoreal' :
                divisaoReal()
                break;
            case 'divisaointeiro' :
                divisaoInteiro()
                break;
            case 'potenciacao' :
                potenciacao()
                break;
            default:
                break;
        }
    }
}
