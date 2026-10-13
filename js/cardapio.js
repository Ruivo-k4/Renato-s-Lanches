
console.log("cardapio.js is on");

const container = document.querySelector("#listaProdutos");

const produtos = [
    {
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600",
        nome: "X-Bacon",
        desc: "Hambúrguer, queijo prato, bacon crocante e maionese da casa.",
        preco: "R$ 24,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        nome: "X-Salada",
        desc: "Hambúrguer, queijo, alface fresca, tomate e maionese especial.",
        preco: "R$ 20,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600",
        nome: "X-Burguer",
        desc: "Hambúrguer grelhado e queijo derretido no pão macio.",
        preco: "R$ 17,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",
        nome: "X-Egg",
        desc: "Hambúrguer, queijo, ovo frito e maionese especial.",
        preco: "R$ 21,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600",
        nome: "X-Tudo",
        desc: "Hambúrguer, queijo, presunto, bacon, ovo, salada e milho.",
        preco: "R$ 29,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600",
        nome: "X-Frango",
        desc: "Frango, queijo prato, alface, tomate e maionese.",
        preco: "R$ 22,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
        nome: "Smash Supremo",
        desc: "Dois hambúrgueres prensados, queijo e molho especial.",
        preco: "R$ 27,90",
        categoria: "Hambúrguer"
    },
    {
        img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600",
        nome: "X-Vegetariano",
        desc: "Hambúrguer vegetal, queijo, alface, tomate e picles.",
        preco: "R$ 23,90",
        categoria: "Vegetariano"
    }
];

function renderizarProdutos(listaDeProdutos) {
    if (!container) {
        console.error("O elemento #listaProdutos não foi encontrado.");
        return;
    }

    container.innerHTML = "";

    listaDeProdutos.forEach((produto) => {
        const card = document.createElement("article");
        card.className = "produto-card";

        const imagem = document.createElement("img");
        imagem.className = "produto-card__imagem";
        imagem.src = produto.img;
        imagem.alt = produto.nome;
        imagem.loading = "lazy";

        const conteudo = document.createElement("div");
        conteudo.className = "produto-card__conteudo";

        const nome = document.createElement("h2");
        nome.className = "produto-card__nome";
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.className = "produto-card__descricao";
        descricao.textContent = produto.desc;

        const rodape = document.createElement("div");
        rodape.className = "produto-card__rodape";

        const preco = document.createElement("span");
        preco.className = "produto-card__preco";
        preco.textContent = produto.preco;

        const categoria = document.createElement("span");
        categoria.className = "produto-card__categoria";
        categoria.textContent = produto.categoria;

        rodape.append(preco, categoria);
        conteudo.append(nome, descricao, rodape);
        card.append(imagem, conteudo);

        container.appendChild(card);
    });
}

renderizarProdutos(produtos);
