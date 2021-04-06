const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
  };

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

  const createFareMultiplier = function (multiplyFare) {
    return function (fare) {
      return multiplyFare * fare;
    };
  };
  const fareDoubler = createFareMultiplier(2);
      
  


