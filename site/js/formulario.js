let forms = document.querySelector("#c-formsFormulario");

if (forms) {
    let btn = document.querySelector("#c-formsBtn");
    
    btn.addEventListener('click', () => {
        let msg = document.querySelector("#inMensage");
        let mensagem = `${msg.value}`;

        let url = `https://wa.me/5511911986528?text=${encodeURIComponent(mensagem)}`;

        forms.action = url;
    });
}