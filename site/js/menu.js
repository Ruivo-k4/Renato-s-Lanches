let menu = document.querySelector("#menuIndex");

if (menu) {
    menu.innerHTML =
        `<div class="menu_logo">
             <img src="imgs/renatosLanches.png" alt="RENATO'S LANCHES" id="menuLogoImg">
        </div>
            <div class="menu_nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Cardapio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>`
}