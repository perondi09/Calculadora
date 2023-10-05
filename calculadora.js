function calculadora() {
   const operação = Number(prompt('Escolha uma operaçãoção:\n 1 Soma (+)\n 2 Subtração (-)\n 3 Multiplicação (*)\n 4 Divisão real (/)\n 5 Divisão inteira (%)\n 6 Potenciação (**)'));
   
   let n1 = Number(prompt('Insira o primeiro valor:'));
   let n2 = Number(prompt('Insira o segundo valor:'));
   let resultado;

   function soma() {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`)
      novaOperação();
   }
   function subtracao() {
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`)
      novaOperação();
   }
   function multiplicacao() {
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`)
      novaOperação();
   }
   function divisaoReal() {
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`)
      novaOperação();
   }
   function divisaoInteira() {
      resultado = n1 % n2;
      alert(`O resultado da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
      novaOperação();
   }
   function potenciacao() {
      resultado = n1 ** n2;
      alert(`${n1} Elevado a ${n2} é igual a = ${resultado}`)
      novaOperação();
   }

   function novaOperação() {
      let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

      if (opcao == 1) {
         calculadora();
      } else if (opcao == 2) {
         alert('Até mais!')
      } else {
         alert('Digite uma opção válida!')
         novaOperação();
      }



   }

   if (operação == 1) {
      soma();
   } else if (operação == 2) {
      subtracao();
   } else if (operação == 3) {
      multiplicacao();
   } else if (operação == 4) {
      divisaoReal();
   } else if (operação == 5) {
      divisaoInteira;
   } else if (operação == 6) {
      potenciacao();
   }
}

calculadora();