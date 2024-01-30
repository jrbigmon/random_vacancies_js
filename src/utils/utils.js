const vacancy = require("../entities/vacancies/vacancy");
const apartment = require("../entities/apartments/apartment");


function generateApartments() {
  const apartmentMethods = apartment();
  const apartmentList = [];

  for (let index = 1; index <= 10; index++) {
    const newApartment = apartmentMethods.create("Number: " + index, "A");

    apartmentList.push(newApartment);
  }

  return apartmentList;
}

function generateVacancies() {
  const vacancyMethods = vacancy();
  const vacancyList = [];

  for (let index = 1; index <= 30; index++) {
    const newVacancy = vacancyMethods.create("vc: " + index);

    vacancyList.push(newVacancy);
  }

  return vacancyList;
}

module.exports = {
  generateApartments,
  generateVacancies,
}