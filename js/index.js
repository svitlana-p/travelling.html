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

const timerShow = document.querySelector(".timer");
function subTime(dateCurrent, dateEnd) {
  return dateEnd - dateCurrent;
}

const endDate = {
  fullYear: "2020",
  month: "06",
  day: "01",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

let endDateStr = `${endDate.fullYear}-${endDate.month}-${endDate.day}T${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;

timer = setInterval(function () {
  const now = new Date();
  const date = new Date(endDateStr);
  const timeLeft = subTime(now, date);
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Час вийшов!");
  } else {
    const res = new Date(timeLeft);
    const timerStr = `${res.getUTCMonth()} місяців ${
      res.getUTCDate() - 1
    } днів ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
    timerShow.innerHTML = timerStr;
  }
}, 1000);
