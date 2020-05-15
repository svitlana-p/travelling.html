document
  .getElementById("sendToCompany")
  .addEventListener("click", sendBtnPressed);
let formMail = document.getElementById("recipient-name");
let formText = document.getElementById("message-text");
function sendBtnPressed() {
  formMail.value = "";
  formText.value = "";
}




