const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

// Con los datos anteriores obten lo siguiente
/*
  Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
  Imprime el stack de cada explorer, usa FOR EACH
  Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
  Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
  Busca el primer explorer que sea de la CDMX, usa FIND
  Obtén la suma de todos los exercises_completed, usa REDUCE
  Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
  Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
*/

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")

explorers.forEach(explorer => console.log(explorer.name))

// 2. Imprime el stack de cada explorer, usa FOR EACH

console.log("\n2. Imprime el stack de cada explorer, usa FOR EACH")

explorers.forEach(explorer => console.log("Stack: ", explorer.stack))

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

console.log("\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")

const stacksList = explorers.map(explorer => explorer.stack)
console.log("Stacks List", stacksList)

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

console.log('\n4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')

const stacksJS = explorers.filter(explorer => explorer.stack.includes('js'))
console.log("Stacks with JS", stacksJS)

// 5. Busca el primer explorer que sea de la CDMX, usa FIND

console.log("\n5. Busca el primer explorer que sea de la CDMX, usa FIND")

const cdmx = explorers.find((explorer) => explorer.city === "CDMX")
console.log(cdmx)

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE

console.log("\n6. Obtén la suma de todos los exercises_completed, usa REDUCE")

const sumExcercisesCompleted = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)

console.log("Total Excercises Completed: ", sumExcercisesCompleted)

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

console.log("\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")

const areExcerisesFinishedFrontend = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("Alguno de los elementos en el array en su propiedad exercisesFinished  de mission frontend is true: " + areExcerisesFinishedFrontend) //true

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

console.log("\n8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")

const areOnboardingMissionCompleted = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true) // every
console.log("Onboarding is finished for all Explorers: " + areOnboardingMissionCompleted)