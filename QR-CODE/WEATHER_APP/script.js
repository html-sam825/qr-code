document.getElementById("form").addEventListener("siubmit", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  let apikey = "eb122e2646063beb6769f83b463lf8d9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q-${city}&appid-${apikey}&units-metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.doc === "404") {
        document.getElementById("result").innerHTML = "data is not available";
      } else {
        let getweather = `<p> Weather is </p>`;
      }
    });
});
