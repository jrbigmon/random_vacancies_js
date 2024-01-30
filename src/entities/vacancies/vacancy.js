function vacancy() {
  function create(number) {
    const vacancyCreated = {
      number,
      printVacancy: function() {
        console.log(number)
      }
    }

    return vacancyCreated;
  }

  const methods = {
    create,
  };

  return methods;
}

module.exports = vacancy;