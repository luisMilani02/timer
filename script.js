let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let pausa = document.getElementById('pause')
let resetar = document.getElementById('resetar')
let zerar = document.getElementById('zerar')
let comecar = document.getElementById('comecar')
let titulo = document.getElementById('titulo')
let invaTxt = document.getElementById('invalido')
let body = document.getElementById('body')
let horaInicial, minutoInicial, segundoInicial
let rodando = false
let tempoTotal = 0;
let tempo

comecar.addEventListener('click', comeca)
zerar.addEventListener('click', zera)
pausa.addEventListener('click', pausar)
resetar.addEventListener('click', reseta)
body.addEventListener('click', corNorm)

function values() {
    let horaAtual = Number(horas.value) || 0
    let minutoAtual = Number(minutos.value) || 0
    let segundoAtual = Number(segundos.value) || 0

    return {horaAtual, minutoAtual, segundoAtual}
}

function comeca() {    
    let { horaAtual, minutoAtual, segundoAtual } = values();

    body.style.backgroundColor = '#121519'

    if (rodando == false) {
        horaInicial = horaAtual;
        minutoInicial = minutoAtual;
        segundoInicial = segundoAtual;

        horaAtual = horaAtual * 60 * 60;
        minutoAtual = minutoAtual * 60;
        tempoTotal = horaAtual+minutoAtual+segundoAtual;

        if (tempoTotal == 0) {
            invalido()
        } else {
            console.log(`tempo total: ${tempoTotal}`)
                
            invaTxt.style.visibility = 'hidden'

            tempo = setInterval(() => {
                tempoTotal--;
                console.log(tempoTotal)
                temp()
                rodando = true
                cores()
                if (tempoTotal <= 0) {
                    clearInterval(tempo)
                    rodando = false
                }
            }, 1000);
        }
    } else {
        acabar()
    }
}

function temp() {
    let horasCon = Math.floor(tempoTotal / 3600)
    let minutosCon = Math.floor((tempoTotal % 3600) / 60)
    let segundosCon = Math.floor(tempoTotal % 60)

    console.log(`teste ${horasCon}, ${minutosCon}, ${segundosCon}`)

    if (horasCon <= 9) {
        horas.value = '0' + horasCon
    } else {
        horas.value = horasCon
    }
     
    if (minutosCon <= 9) {
        minutos.value = '0' + minutosCon
    } else {
        minutos.value = minutosCon
    }

    if (segundosCon <= 9) {
        segundos.value = '0' + segundosCon
    } else {
        segundos.value = segundosCon
    }
}

function pausar() {
    let { horaAtual, minutoAtual, segundoAtual } = values();

    body.style.backgroundColor = '#121519'
    clearInterval(tempo)
    
    if (segundoAtual <= 9) {
        segundos.value = '0' + segundoAtual
    } else {
        segundos.value = segundoAtual
    }

    if (minutoAtual <= 9) {
        minutos.value = '0' + minutoAtual
    } else {
        minutos.value = minutoAtual
    }

    if (horaAtual <= 9) {
        horas.value = '0' + horaAtual
    } else {
        horas.value = horaAtual
    }

    rodando = false
}

function reseta() {
    body.style.backgroundColor = '#121519'
    clearInterval(tempo)

    if (horaInicial <= 9) {
        horas.value = '0' + horaInicial
    } else {
        horas.value = horaInicial
    }
     
    if (minutoInicial <= 9) {
        minutos.value = '0' + minutoInicial
    } else {
        minutos.value = minutoInicial
    }

    if (segundoInicial <= 9) {
        segundos.value = '0' + segundoInicial
    } else {
        segundos.value = segundoInicial
    }

    rodando = false
}

function zera() {
    body.style.backgroundColor = '#121519'
    clearInterval(tempo)

    segundos.value = "00"
    minutos.value = "00"
    horas.value = "00"

    rodando = false
}

function cores() {
    let cores = ['#242424', '#303030', '#383838']
    let x = tempoTotal

    cores.reverse()

    if (tempoTotal <= 3) {
        x -= 1
        console.log(cores[x])
        body.style.backgroundColor = cores[x]
        if (tempoTotal == 0) {
            body.style.backgroundColor = '#940b05'
        }
    }
}

function corNorm() {
    body.style.backgroundColor = '#121519'
}

function invalido() {
    let erroMsg = document.getElementById('erroMsg')

    erroMsg.textContent = ''
    erroMsg.textContent = 'Valor inválido!'

    invaTxt.style.fontSize = '15px'
    invaTxt.style.visibility = 'visible'

    setTimeout(() => {
        invaTxt.style.visibility = 'hidden'
    }, 10000);
}

function acabar() {
    let erroMsg = document.getElementById('erroMsg')
    
    erroMsg.textContent = ''
    erroMsg.textContent = 'Espere acabar!'
    erroMsg.style.fontSize = '10px'

    invaTxt.style.visibility = 'visible'
    
    setTimeout(() => {
        invaTxt.style.visibility = 'hidden'
    }, 10000);
}

function pagina() {
    window.open('https://luisgprojects.wuaze.com', '_blank')
}