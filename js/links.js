let btnMenuL = document.querySelectorAll(".btnMenu--l");

if (btnMenuL) {
    btnMenuL.forEach((element) => {
        element.addEventListener('click', () => {
            window.location.href = "cardapio.html";
        });
    });
}