function pessoa() {
  this.idade = 0

  const corp = this
  setInterval(
    function () {
      corp.idade++
      console.log(corp.idade)
    } /*.bind(this)*/,
    1000
  )
}

new pessoa()
