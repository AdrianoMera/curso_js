const numero = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `
<p>Raiz quadrada ${numero ** 0.5}.</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>
<p>É NaN: ${n=Number.isNaN(numero)}.</p>
<p>Arredondano para baixo: ${Math.floor(numero)}.</p>
<p>Arredondano para cima: ${Math.ceil(numero)}.</p>
<p>Com duas casas decimais:${numero.toFixed(2)}.</p>
`