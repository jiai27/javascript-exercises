const convertToCelsius = function(faren) {
  //round to one place: Math.round(number*10)/10
  let celsius = (faren - 32) * (5/9)
  let final = Math.round(celsius*10) / 10
  console.log(faren, celsius, final)
  return final
};

const convertToFahrenheit = function(cels) {
  let farenheit = (cels * (9/5) + 32)
  let final = Math.round(farenheit*10) / 10
  console.log(cels, farenheit, final)
  return final
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
