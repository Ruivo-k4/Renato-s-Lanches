let menu = document.querySelector("#menuIndex");

if (menu) {
    menu.innerHTML =
        `<div class="menu_item" id="menu_logo">
             <img src="imgs/renatosLanches.png" alt="RENATO'S LANCHES" id="menuLogoImg">
        </div>
            <div class="menu_item" id="menu_nav">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="cardapio_frame.html">Cardapio</a></li>
                    <li><a href="sobre_frame.html">Sobre</a></li>
                    <li><a href="contato_frame.html">Contato</a></li>
                </ul>
            </div>
            <div class="menu_item" id="menu_action">
                <button class="action_item" id="btnMenuAction">Peça já</button>
            </div>`
}

let footer = document.querySelector("#footerIndex");

if (footer) {
    footer.innerHTML = 
    `<div class="footer_content">
        <div class="footer_item" id="footerImg">
            <img src="imgs/renatosLanches.png" alt="RENATO'S LANCHES" id="menuLogoImg">
            <p>Sabor que dá vontade<br>de voltar sempre!</p>
        </div>

        <div class="footer_item" id="footerNav">
        <h1>Navegação</h1>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="cardapio_frame.html">Cardapio</a></li>
                <li><a href="sobre_frame.html">Sobre</a></li>
                <li><a href="contato_frame.html">Contato</a></li>
            </ul>
        </div>

        <div class="footer_item" id="footerInfo">
            <h1>horario de funcionamento</h1>
            <div class="info_item">
                <p>Segunda a Domingo<br>18h á 23h</p>
                <p>*Exeto feriados</p>
            </div>
        </div>

        <div class="footer_item" id="footerContact">
            <h1>redes sociais</h1>
            <ul>
                <li><a href="#">face</a></li>
                <li><a href="#">ista</a></li>
                <li><a href="#">what</a></li>
            </ul>
        </div>
    </div>`
}