let tg = window.Telegram.WebApp;
tg.expand();

function sendSignal() {
  document.getElementById("result").innerHTML =
    "✅ Signal sent to Telegram Bot!";
  
  tg.sendData("REQUEST_SIGNAL");
}
