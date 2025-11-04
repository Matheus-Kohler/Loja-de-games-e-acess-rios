const produtos = document.querySelectorAll(".produto");
const modal = document.getElementById("modal-compra");
const fechar = document.getElementById("fechar-modal");
const modalNome = document.getElementById("modal-nome");
const modalPreco = document.getElementById("modal-preco");
const modalImg = document.getElementById("modal-img");
const formCompra = document.getElementById("form-compra");

produtos.forEach(produto => {
    produto.addEventListener("click", () => {
    const nome = produto.getAttribute("data-nome");
    const preco = produto.getAttribute("data-preco");
    const img = produto.getAttribute("data-img");

    modalNome.textContent = nome;
    modalPreco.textContent = "Preço: R$ " + preco;
    modalImg.src = img;

    formCompra.produto.value = nome;
    formCompra.valor.value = preco;

    modal.style.display = "flex";
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

formCompra.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeCliente = formCompra.cliente.value;
    const emailCliente = formCompra.email.value;
    const enderecoCliente = formCompra.endereco.value;
    const produto = formCompra.produto.value;
    const valor = formCompra.valor.value;

    alert(
        `Compra finalizada!
        Cliente: ${nomeCliente}
        Email: ${emailCliente}
        Endereço: ${enderecoCliente}
        Produto: ${produto}
        Valor: R$ ${valor}`
    );
    
    formCompra.reset();
});

