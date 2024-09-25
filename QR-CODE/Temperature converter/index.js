const calcius = document.querySelector("#celsius");
const Farrenheit = document.querySelector("#Farrenheit");
const kelvin = document.querySelector("#Kelvin");

//calcuis to fahreheit => (0 degrees * 9/5) +32 = 32 degrees F
//calcuis to kelvin => 0 degrees +273.15 = 273.15K

calcius.addEventListener("input", function () {
  let c = parseFloat(calcius.value);
  let f = (c * 9) / 5 + 32;
  let k = c + 273.15;
  Farrenheit.value = f;
  kelvin.value = k;
});

calcius.addEventListener("input", function () {
  let f = parseFloat(calcius.value);
  let c = ((f - 32) * 5) / 9;
  let k = ((f - 32) * 5) / 9 + 273.15;
  Farrenheit.value = c;
  kelvin.value = k;
});

calcius.addEventListener("input", function () {
  let k = parseFloat(calcius.value);
  let f = ((k - 273.15) * 9) / 5 + 32;
  let c = k - 273.15;
  Farrenheit.value = f;
  kelvin.value = c;
});
