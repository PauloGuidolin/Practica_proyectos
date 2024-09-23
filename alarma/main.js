let input = document.getElementById('time');
let button = document.getElementById('button-time');
let msg = document.getElementById('msg');
let apagado = document.getElementById('apagado');
let sonido = document.getElementById('sonido-alarma');

button.addEventListener('click', () => {
    setTimeout(tiempoCumplido, input.value * 1000) //milisegundos)

})

function tiempoCumplido() {
    setTimeout(borrar, input.value * 1000)
    msg.innerHTML = `
    <p class='p-alarma'> Alarma activada </p>
    `
    // apagado.style.display = 'flex'
    sonido.play()

}

function borrar() {
    msg.innerHTML = `<p></p>`
}