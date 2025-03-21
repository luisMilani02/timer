let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let rodando = false
let tempoTotal = 0

function comecar() {
    if (!rodando) {
        rodando = true
        rodar()
    }
}

function rodar() {
    if (rodando == true) {
        console.log('rodando ' + tempoTotal)
        tempoTotal = tempoTotal - 1
        rodando = false
    }
}

function calculaTempo() {
    let horaAtual = +horas.value
    let minutoAtual = +minutos.value
    let segundoAtual = +segundos.value

    // console.log(horaAtual + minutoAtual + segundoAtual)

    horaAtual = horaAtual * 60 * 60 
    // console.log(horaAtual)
    minutoAtual = minutoAtual * 60
    // console.log(minutoAtual)
    tempoTotal += segundoAtual + horaAtual + minutoAtual

    console.log(tempoTotal)
}