const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // transforma em binário
console.log(typeof media)
console.log(typeof Number) // Number com "N" maiúsculo é uma função.
// number com "n" menúsculo é um tipo do dado, no caso quando você tem um valor númerico, tanto o valor inteiro, como o valor ponto flutuante.
