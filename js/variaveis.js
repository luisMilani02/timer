const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const pausa = document.getElementById('pause')
const resetar = document.getElementById('resetar')
const zerar = document.getElementById('zerar')
const comecar = document.getElementById('comecar')
const titulo = document.getElementById('titulo')
const invaTxt = document.getElementById('invalido')
const body = document.getElementById('body')
let horaInicial 
let minutoInicial
let segundoInicial
let rodando = false
let tempoTotal = 0
let comecou = false
let tempo

comecar.addEventListener('click', comeca)
zerar.addEventListener('click', zera)
pausa.addEventListener('click', pausar)
resetar.addEventListener('click', reseta)
body.addEventListener('click', corNorm)
