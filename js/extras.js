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