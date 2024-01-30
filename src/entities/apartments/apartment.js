function apartment() {
  function create(number, tower) {
    const apartmentCreated = {
      number,
      tower,
      printApartment: function() {
        console.log(number)
      }
    }

    return apartmentCreated;
  }

  const methods = {
    create,
  };

  return methods;
}

module.exports = apartment;