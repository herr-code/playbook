const Superhero = require("./../app/Superhero")

// Se lo mas descriptivo que puedas
describe("Unit test for Superhero", () => {
  test('Case 1: Get a superhero', () => {
    // Código final que usaremos en nuestra app
    const ironman = new Superhero("Iron Man", "Robert Dwoney Jr.", "Tony Stark")
    
    // Validar el comportamiento del código de arriba
    expect(ironman.name).toBe("Iron Man");
    expect(ironman.actor).toBe("Robert Dwoney Jr.");
    expect(ironman.heroName).toBe("Tony Stark");
  });
});