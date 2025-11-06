// global.js

document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        produto.addEventListener("click", () => {
            // Pegando os dados do produto
            const nome = produto.getAttribute("data-nome");
            const preco = produto.getAttribute("data-preco");
            const img = produto.getAttribute("data-img");

            // Armazenando as informações no localStorage
            localStorage.setItem("produto_nome", nome);
            localStorage.setItem("produto_preco", preco);
            localStorage.setItem("produto_img", img);

            // Redirecionando para a página de login
            window.location.href = "login.html";
        });
    });
});
