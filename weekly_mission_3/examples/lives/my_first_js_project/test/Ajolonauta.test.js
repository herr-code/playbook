// Con common JS tienes que escribir el path relativo
const Ajolonauta = require('./../app/Ajolonauta')

// describe("Esto es una suite de pruebas", () => {
//   test('Caso de prueba 1', () => {
//     // Aqui tu puedes usar el código como lo desees utilizar
			 // Tal cual como lo escribirias ya en la aplicacion
//     const result = 1 + 2

//     // Validar el resultado esperado
//     expect(result).toBe(10);
//   });
// });

// Se lo mas descriptivo que puedas
describe("Pruebas de unidad de Ajolonauta", () => {
  test('Caso de prueba 1: Creación de un objeto', () => {
    const woopa = new Ajolonauta("Woopa")
    expect(woopa.name).toBe("Woopa");
  });
});

