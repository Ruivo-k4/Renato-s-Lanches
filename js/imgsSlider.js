console.log("imgsSlider is on")

const slider = document.querySelector(".carousel-inner")

if (slider) {
    const datas = {
        inicio: [
            {
                img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500',
                nome: 'X-Bacon',
                desc: 'Hambúrguer, queijo prato, muito bacon crocante e maionese da casa',
                preco: 'R$ 24,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
                nome: 'X-Salada',
                desc: 'Hambúrguer, queijo, alface fresca, tomate e maionese especial',
                preco: 'R$ 20,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500',
                nome: 'X-Burguer',
                desc: 'Hambúrguer tradicional grelhado na brasa e queijo derretido',
                preco: 'R$ 17,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
                nome: 'X-Egg',
                desc: 'Hambúrguer, queijo, ovo frito com gema mole e maionese',
                preco: 'R$ 21,90'
            }
        ],
        meio: [
            {
                img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500',
                nome: 'X-Tudo',
                desc: 'Hambúrguer, queijo, presunto, bacon, ovo, alface, tomate e milho',
                preco: 'R$ 29,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500',
                nome: 'X-Frango',
                desc: 'Filé de frango grelhado, queijo prato, alface, tomate e maionese',
                preco: 'R$ 22,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
                nome: 'X-Calabresa',
                desc: 'Hambúrguer, calabresa fatiada, queijo derretido e cebola acebolada',
                preco: 'R$ 23,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500',
                nome: 'X-Catupiry',
                desc: 'Hambúrguer, queijo, bastante Catupiry original e milho',
                preco: 'R$ 25,90'
            }
        ],
        fim: [
            {
                img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500',
                nome: 'Duplo Bacon Cheese',
                desc: 'Dois hambúrgueres, dobro de queijo cheddar e muito bacon',
                preco: 'R$ 34,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500',
                nome: 'X-Vegetariano',
                desc: 'Hambúrguer de grão-de-bico, queijo, alface, tomate e picles',
                preco: 'R$ 23,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
                nome: 'Smash Supremo',
                desc: 'Dois hambúrgueres prensados, queijo americano e molho especial',
                preco: 'R$ 27,90'
            },
            {
                img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500',
                nome: 'X-Picanha',
                desc: 'Hambúrguer artesanal de picanha 180g, queijo cheddar e cebola caramelizada',
                preco: 'R$ 36,90'
            }
        ]
    };

    function renderizarLanches(containerId, listaDeLanches) {
        const container = document.querySelector(containerId);
        if (!container) return;

        container.innerHTML = '';

        const row = document.createElement('div');
        row.className = 'row g-3 p-3';

        listaDeLanches.forEach((lanche) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-lg-3';

            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${lanche.img}" class="card-img-top" alt="${lanche.nome}">
                    <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title">${lanche.nome}</h5>
                        <p class="card-text text-muted small">${lanche.desc}</p>
                    </div>
                    <h6 class="card-subtitle mt-2 text-primary fw-bold">${lanche.preco}</h6>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        container.appendChild(row);
    }

    renderizarLanches('#card1', datas.inicio);
    renderizarLanches('#card2', datas.meio);
    renderizarLanches('#card3', datas.fim);
}