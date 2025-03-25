
function values() {
    let horaAtual = Number(horas.value) || 0
    let minutoAtual = Number(minutos.value) || 0
    let segundoAtual = Number(segundos.value) || 0

    return {horaAtual, minutoAtual, segundoAtual}
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

function comeca() {    
    let { horaAtual, minutoAtual, segundoAtual } = values();

    body.style.backgroundColor = '#121519'                      

    if (rodando == false) {

        if (!comecou) {
            horaInicial = horaAtual;
            minutoInicial = minutoAtual;
            segundoInicial = segundoAtual;    
            comecou = true
        }

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
                    comecou = false
                }
            }, 1000);
        }
    } else {
        acabar()
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
    comecou = false
}

function zera() {
    body.style.backgroundColor = '#121519'
    clearInterval(tempo)

    segundos.value = "00"
    minutos.value = "00"
    horas.value = "00"

    rodando = false
    comecou = false
}