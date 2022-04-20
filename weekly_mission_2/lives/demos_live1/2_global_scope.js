/*
 Contexto Global: variables disponibles en el script.
 Importante:
 - Declarar una función.
 - Ver cómo modificar variables globales (contexto global y local)
*/
// Se puede decir que este a y b estan declarados de forma global y pueden ser
// accedidas desde donde sea (dentro de este archivo)
let a = 'JavaScript'
let b = 10

// Esto es una función
function my_function_to_show_scopes() {
  console.log(a, b) // a = "Javascript", b = 10
  if (true) {// a y b dentro de este if solo pertenecen a este contexto (bloque del if)
    // Estás variables estarán disponibles en este bloque y no fuera de el
    let a = 'Elixir'
    let b = 999
    console.log(a, b) // Elixir, 999
  }
  console.log(a, b)
}

// Así ejecuto mi función
my_function_to_show_scopes()

console.log(a, b)

/*
Output:
JavaScript 10
Elixir 9999
JavaScript 10
JavaScript 10
*/