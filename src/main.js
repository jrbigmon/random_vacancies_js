const merge = require("./entities/merge/merge");
const utils = require("./utils/utils");

function main() {
  const mergeMethods = merge();
  const apartmentsCreated = utils.generateApartments();
  const vacanciesCreated = utils.generateVacancies();
  const mergedVacanciesWithApartments = [];

  apartmentsCreated.forEach(function (apartment) {
    const randomVacancyIndex = Math.floor(
      Math.random() * vacanciesCreated.length
    );
    
    
    const mergedVacancyWithApartment = mergeMethods.create(
      apartment,
      vacanciesCreated[randomVacancyIndex]
      );
      
    vacanciesCreated.splice(randomVacancyIndex, 1);
    
    mergedVacanciesWithApartments.push(mergedVacancyWithApartment)
  });

  mergedVacanciesWithApartments.forEach(function(mergedList){
    mergedList.printMerge();
  })

  // vacanciesCreated.forEach(function(vacancy){
  //   vacancy.printVacancy();
  // })

  console.log("Vagas que sobraram: ", vacanciesCreated.length);
}

main();
