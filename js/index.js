const propButton = document.getElementById("prop");
propButton.addEventListener("click", propPressed);
function propPressed() {
  alert("Дякуємо!");
}
const callButton = document.getElementById("callback");
callButton.addEventListener("click", callPressed);
function callPressed() {
  alert("Очікуйте дзвінок менеджера!");
}
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=Lviv,ua&lang=uk&appid=c115e8eacaaa6f671443e3744c1422da"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weatherCity").textContent = data.city.name;
    document.querySelector(".weatherForecast").innerHTML =
      Math.round(data.list[0].main.temp - 273) + "&deg;";
    document.querySelector(".weatherDesc").textContent =
      data.list[0].weather[0]["description"];
    document.querySelector(
      ".weatherIcon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0]["icon"]}@2x.png">`;
  })
  .catch(function () {});


