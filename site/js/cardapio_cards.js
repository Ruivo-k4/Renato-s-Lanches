let cardapio = document.querySelector("#itemProdutos");

if (cardapio) {
    let todos = document.querySelector("#titleBusca1");

    const dados = [
        {
            img: 'imgs/renato4.png',
            title: "Renatão de 4 pessoas",
            desc: "Pão, carne, queijo, alface, tomate, cebola, bacon, ovo e tudo que há de bom",
            preco: "22,00"
        },
        {
            img: "imgs/renuggets.jpg",
            title: "Renuggets",
            desc: "Frango, ovo, farinha de rosca, creme do renato",
            preco: "7,99"
        },
        {
            img: "imgs/renatoburguer.jpg",
            title: "renatoburguer",
            desc: "Pão, carne, queijo, bacon, cheddar, molho do renato",
            preco: "24,99"
        },
        {
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
            title: "Renato Duplo Bacon",
            desc: "Pão brioche, 2 carnes de 150g, duplo cheddar, muito bacon e molho especial",
            preco: "28,90"
        },
        {
            img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
            title: "Renatinho Kids",
            desc: "Pão macio, carne de 90g, queijo prato e acompanhamento de batata pequena",
            preco: "15,50"
        },
        {
            img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
            title: "Renato Salad",
            desc: "Pão com gergelim, carne de 150g, queijo prato, alface americana, tomate e maionese verde",
            preco: "19,90"
        },
        {
            img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
            title: "Batata do Renato",
            desc: "Porção de batata frita crocante com molho de cheddar e tiras de bacon",
            preco: "14,00"
        },
        {
            img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500",
            title: "Renato Chicken",
            desc: "Pão brioche, empanado de frango crocante, queijo muçarela, alface e maionese da casa",
            preco: "21,50"
        },
        {
            img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500",
            title: "Renato Smoked",
            desc: "Pão australiano, carne artesanal, queijo gouda, cebola caramelizada e molho barbecue",
            preco: "26,90"
        },
        {
            img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
            title: "Renatão Monstro",
            desc: "Pão brioche, 3 carnes de 150g, triplo cheddar, bacon, ovo e cebola empanada",
            preco: "35,00"
        },
        {
            img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500",
            title: "Renato Egg",
            desc: "Pão tradicional, carne de 150g, queijo prato, ovo frito, alface e tomate",
            preco: "20,00"
        },
        {
            img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500",
            title: "Anéis de Cebola do Renato",
            desc: "Porção de anéis de cebola empanados e crocantes acompanhados de molho barbecue",
            preco: "12,90"
        },
        {
            img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500",
            title: "Renato Veggie",
            desc: "Pão brioche, hambúrguer de grão-de-bico, queijo prato, alface, tomate e maionese da casa",
            preco: "22,50"
        },
        {
            img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500",
            title: "Renato Melt Cheddar",
            desc: "Pão escuro tipo australiano, carne de 180g, muito creme de cheddar e cebola caramelizada",
            preco: "25,00"
        },
        {
            img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
            title: "Milkshake do Renato",
            desc: "Milkshake cremoso de chocolate de 500ml com calda de chocolate e chantilly",
            preco: "16,00"
        },
        {
            img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500",
            title: "Renato Spicy",
            desc: "Pão brioche, carne de 150g, queijo pepper jack, jalapeños fatiados e molho picante",
            preco: "23,90"
        }
    ]

    function create(dado) {
        dado.forEach((dados) => {
            cardapio.innerHTML += `
            <div class="card">
                <img src="${dados.img}" id="cardImg">
                <div class="card_info">
                    <h2 class="info_item">${dados.title}</h2>
                    <p class="info_desc">${dados.desc}</p>
                    <p class="info_val">R$${dados.preco}<p>
                </div>
            </div>
        `;
        });
    }

    if (todos){
        create(dados);
    }
}