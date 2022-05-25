// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(10, 8)
imprimirSoma(10)
imprimirSoma(10, 8, 4, 23, 2, 1)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
