// Variables
const listadoPosiblesSoluciones = ['lampara', 'pizarra', 'guitarra', 'monitor', 'bondad'];
let solucion = listadoPosiblesSoluciones[Math.floor(Math.random() * listadoPosiblesSoluciones.length)];
const visualJugador = document.querySelector('#visual-jugador');
const nuevaLetra = document.querySelector('#nueva-letra');
const letrasJugador = document.querySelector('#letras-jugador');
let visualUsuario = Array(solucion.length).fill('_');
let intentos = 6;
let letrasIntroducidas = [];
let letrasIntroducidasSet;
let letrasIntroducidasVisual = [];

// Funciones
function checkChar() {

    letrasIntroducidas.push(nuevaLetra.value.toLowerCase());

    letrasIntroducidasSet = new Set(letrasIntroducidas);

    letrasIntroducidasVisual = [...letrasIntroducidasSet];

    let solucionArray = solucion;
    solucionArray = solucionArray.split('');

    solucionArray.forEach((char, i) => {
        if (char === nuevaLetra.value) {
            visualUsuario[i] = char;
        }
    });

    renderVisualUsuario();

    nuevaLetra.value = "";

}

function hasGanado() {
    alert("Has ganado");
    solucion = listadoPosiblesSoluciones[Math.floor(Math.random() * listadoPosiblesSoluciones.length)];
    letrasIntroducidas = [];
    letrasIntroducidasVisual = [];
    visualUsuario = Array(solucion.length).fill('_');
    console.log(solucion);
    nuevaLetra.value = "";
    renderVisualUsuario();
}

function renderVisualUsuario() {

    visualJugador.textContent = "";
    letrasJugador.textContent = "";

    visualUsuario.forEach(char => {
        visualJugador.textContent += `${char} `;
    });

    letrasIntroducidasVisual.forEach(char => {
        letrasJugador.textContent += `${char} `;
    });

    if (solucion === visualUsuario.join("")) hasGanado();

}

// Eventos

nuevaLetra.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        if (letrasIntroducidasVisual.length < intentos) {
            checkChar();
        } else {
            alert('Has agotado los intentos!');
            solucion = listadoPosiblesSoluciones[Math.floor(Math.random() * listadoPosiblesSoluciones.length)];
            letrasIntroducidas = [];
            letrasIntroducidasVisual = [];
            visualUsuario = Array(solucion.length).fill('_');
            console.log(solucion);
            nuevaLetra.value = "";
            renderVisualUsuario();
        }
    }
});

// Inicio
renderVisualUsuario();
console.log(solucion);