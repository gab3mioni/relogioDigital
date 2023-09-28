function relogioDigital() {
    const relogioD = document.getElementById("relogio");
    const data = new Date();
    relogioD.textContent = data.toLocaleTimeString()
}

relogioDigital();

setInterval(relogioDigital, 1000);