// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'falaa' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
  nome: 'Ronny ',
  idade: 24,
  peso: 91,
  endereco: {
    logadouro: 'Rua vinte e três de janeiro',
    numero: 33
  }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)
