

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("my-form");
    const button = document.getElementById("sendToCompany");
    const status = document.getElementById("my-form-status");

    
    const formResp = document.getElementById("resp-form");
    const buttonResp = document.getElementById("resp");
    const statusResp = document.getElementById("form-status");
    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }
function successResp() {
      formResp.reset();
      buttonResp.style = "display: none ";
      statusResp.innerHTML = "Thanks!";
    }
    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }
function errorResp() {
      statusResp.innerHTML = "Oops! There was a problem.";
    }
    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      const data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
    formResp.addEventListener("submit", function(ev) {
      ev.preventDefault();
      const data1 = new FormData(formResp);
      ajax(formResp.method, formResp.action, data1, successResp, errorResp);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

