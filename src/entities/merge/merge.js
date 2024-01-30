function merge() {
  function create(apartment, vacancy) {
    const merged = {
      apartment,
      vacancy,
      printMerge: function() {
        console.log(`Apartment: ${apartment.number}, Vacancy: ${vacancy.number}.`)
      }
    }

    return merged;
  }

  const methods = {
    create,
  };

  return methods;
}

module.exports = merge;