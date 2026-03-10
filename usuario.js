const BtnFechar = document.getElementById("fechar");

function fecharJanela() {
    BtnFechar.addEventListener("click", fecharJanela);
    window.close();
}
