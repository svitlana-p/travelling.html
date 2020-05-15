document
  .getElementById("sendToCompany")
  .addEventListener("click", sendBtnPressed);
let formMail = document.getElementById("recipient-name");
let formText = document.getElementById("message-text");
function sendBtnPressed() {
  formMail.value = "";
  formText.value = "";
}
document.querySelector('.addResponses').addEventListener('click', responce);
function responce (){
    for (let i=0; i<2; i++) {
let resps = prompt('Напишіть своє ім\'я та залиште відгук у наступному вікні');
document.querySelector('.addedResp').append(resps + ' ' +' ');
    }
}