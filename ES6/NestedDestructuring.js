const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // This is Es6 destructuring
    const {tomorrow:{max:maxOfTomorrow}}= forecast; // This is nested is maxOfTomorrow=forecast.tomorow[max];
    // change code above this line
    //const a=forecast.tomorrow['max'];
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6