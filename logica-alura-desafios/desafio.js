let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

const consoleTela = () =>  {
    console.log('O botão foi clicado');
}


const amoJs = () => {
    let nome = prompt('Digite um nome: ')
    alert(`Eu amo ${nome}`);
}

const cidadeBr = () => {
   let cidade = prompt('Me fale uma cidade do Brasil :)');
       alert(`Estive em ${cidade} e lembrei de você <3`);

}


const somaDoNumero = () => {
    alert('Iremos fazer uma soma ^^ !');
   let n1 = Number(prompt('Digite o primeiro número: '))
   let n2 = Number(prompt('Digite o segundo número: '));

   let resultado = n1 + n2;

   alert(`O resultado de ${n1} + ${n2} é = ${resultado}`)
}