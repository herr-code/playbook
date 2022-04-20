/*
Contexto global: Al declarar variables sin const o let, estarás guardando los valores 
en el contexto global. Puedes acceder a estos valores con el objeto window en tu navegador.
*/

a = 'JavaScript'
b = 10
console.log(a, b)

// Accediendo con el objeto window (SOLO) desde el navegador 
// console.log(window.a)