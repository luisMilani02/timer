let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let parar = document.getElementById('parar')
let resetar = document.getElementById('resetar')
let titulo = document.getElementById('titulo')
let horaInicial, minutoInicial, segundoInicial
let rodando = false
let tempoTotal = 0;
let tempo

parar.addEventListener('click', para)
resetar.addEventListener('click', reseta)

function values() {
    let horaAtual = Number(horas.value) || 0
    let minutoAtual = Number(minutos.value) || 0
    let segundoAtual = Number(segundos.value) || 0

    return {horaAtual, minutoAtual, segundoAtual}
}

function comeca() {    
    let { horaAtual, minutoAtual, segundoAtual } = values();

    horaInicial = horaAtual;
    minutoInicial = minutoAtual;
    segundoInicial = segundoAtual;

    horaAtual = horaAtual * 60 * 60;
    minutoAtual = minutoAtual * 60;
    tempoTotal = horaAtual+minutoAtual+segundoAtual;

    if (tempoTotal <= 0) {
        invalido()
    } else {
        console.log(`tempo total: ${tempoTotal}`)

        tempo = setInterval(() => {
            tempoTotal--;
            console.log(tempoTotal)
            temp()
            if (tempoTotal <= 0) {
                clearInterval(tempo)
            }
        }, 1000);
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

function para() {
    let { horaAtual, minutoAtual, segundoAtual } = values();

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
}

function reseta() {
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
}

function invalido() {
    let invaTxt = document.getElementById('invalido')
    
    
}