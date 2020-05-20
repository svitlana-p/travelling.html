window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");
  const button = document.getElementById("sendToCompany");
  const status = document.getElementById("my-form-status");
  const formResp = document.getElementById("resp-form");
  const buttonResp = document.getElementById("resp");
  const statusResp = document.getElementById("form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Дякуємо!";
  }
  function successResp() {
    formResp.reset();
    buttonResp.style = "display: none ";
    statusResp.innerHTML = "Дякуємо!";
  }
  function error() {
    status.innerHTML = "Упс! Щось пішло не так...";
  }
  function errorResp() {
    statusResp.innerHTML = "Упс! Щось пішло не так...";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
  formResp.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data1 = new FormData(formResp);
    ajax(formResp.method, formResp.action, data1, successResp, errorResp);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=Kherson,ua&lang=uk&appid=c115e8eacaaa6f671443e3744c1422da"
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
