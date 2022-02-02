// Variables
const listadoPosiblesSoluciones = ['lampara', 'pizarra', 'guitarra', 'monitor', 'bondad'];
const solucion = listadoPosiblesSoluciones[Math.floor(Math.random() * listadoPosiblesSoluciones.length)];
const visualJugador = document.querySelector('#visual-jugador');
const nuevaLetra = document.querySelector('#nueva-letra');
const letrasJugador = document.querySelector('#letras-jugador');
let visualUsuario = Array(solucion.length).fill('_');
let intentos = 6;
let letrasIntroducidas = [];

// Funciones

// Eventos

// Inicio